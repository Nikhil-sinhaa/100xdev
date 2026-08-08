//create a http server from scratch
#include <iostream>
#include <unistd.h>
#include <arpa/inet.h>
#include <cstring>

using namespace std;

int main() {

    int serverSocket = socket(AF_INET, SOCK_STREAM, 0);

    sockaddr_in serverAddr{};
    serverAddr.sin_family = AF_INET;
    serverAddr.sin_port = htons(3000);
    serverAddr.sin_addr.s_addr = INADDR_ANY;

    bind(serverSocket,
         (sockaddr*)&serverAddr,
         sizeof(serverAddr));

    listen(serverSocket, 5);

    cout << "Server Started\n";

    while (true) {

        int client = accept(serverSocket, NULL, NULL);

        char buffer[4096];

        recv(client, buffer, sizeof(buffer), 0);

        cout << buffer << endl;

        string response =
            "HTTP/1.1 200 OK\r\n"
            "Content-Type: text/plain\r\n"
            "\r\n"
            "Hello World";

        send(client,
             response.c_str(),
             response.size(),
             0);

        close(client);
    }
}
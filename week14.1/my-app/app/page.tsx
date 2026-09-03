import axios from "axios";
async function getUserData(){
  const response = await axios.get("http://localhost:3000/api/user")
  return response.data
}
export default async function Home() {
  const userdetail =await getUserData();

  return (
  <div>
    <div>Name:{userdetail?.name} </div>
    <div>Email:{userdetail?.email} </div>

  </div>
  );
}

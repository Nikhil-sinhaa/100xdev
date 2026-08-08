const arr = [1,2,3,4,5,6]

//filter function
function transform(n){
    if(n%2==0)return true;
    return false;
}
const ans = arr.filter(transform);
console.log(ans)
//mongodb+srv://xhm90760_db_user:0gs2sZUhTzohwqke@cluster0.bhfp1er.mongodb.net/
// npx neonctl@latest init
// postgresql://neondb_owner:npg_1jAyTHnF9EYg@ep-soft-bar-av0sqryp-pooler.c-11.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
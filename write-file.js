const fs=require("fs");
const content1="Hi, I am learning Node js File system \n. I am enjoying so much"
try{
    fs.writeFileSync("./output/output1.txt",content1);
    console.log("File writting Sync");
}
catch(error){
    console.error(error.message);
}

const content2="This is the content for tesing asynchronus testing write";
fs.writeFile("./output/async-output.txt",content2, (error)=>{
    if(error){
        console.error(error.message);

    }
    else{
        console.log("Async file written");
    }
})
const fs=require("fs");
fs.writeFileSync("./output/tmp1.txt","Temp1 file created");
console.log("Tmp1 file created");

if(fs.existsSync("./output/tmp1.txt")){
    console.log("Tmp1 file exist");

    fs.unlinkSync("./output/tmp1.txt");
    console.log("Tmp1.txt file has been deleted");
}

fs.writeFile("./output/temp2.txt","This is temp2 file", (error)=>{
    if(error) return console.error(error.message);
    console.log("Temp2 file hase been created");

    fs.unlink("./output/temp2.txt",(error)=>{
        if(error){
            console.error(error.message);
        }
        console.log("Temp2 file has been deleted");
    })
})
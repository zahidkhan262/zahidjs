//promises

const uploadFile = () => {
    return new Promise((res, rej) => {
        const data = true;
        setTimeout(() => {
            if (data) {
                res("File uploaded!!")
            } else {
                rej("Failed to upload");
            }
        }, 2000)
    })
}


// by async await 
const isFileUpload = async () => {
    try {
        let data = await uploadFile();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
};
isFileUpload()


//by using then catch

uploadFile().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})

// promise.race which is using for multiple promises

const fetchData1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("fetch data one!!")
        }, 3000)
    })
}
const fetchData2 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("fetch data two!!")
        }, 2000)
    })
}

const racePromises = async () => {
    try {
        const result = await Promise.race([fetchData1(), fetchData2()])
        console.log(result, "race")
    } catch (error) {
        console.log(error)
    }
}
racePromises();

//add unique number 
const data =[1,3,5,'6','7','3',undefined,null,true]

const newData = data.map(Number).filter(ele => !Number.isNaN(ele))

const unique = [...new Set(newData)].reduce((prev,curr)=> prev+=curr ,0 )
console.log(unique,"zahid")


what is the output
console.log([].constructor.name,"op") //
console.log({}.constructor.name,"op1") //


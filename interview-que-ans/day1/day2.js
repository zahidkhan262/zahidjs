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

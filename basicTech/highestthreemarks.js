const classA = [
    {
        name: 'danish',
        marks: 8,
    },
    {
        name: 'mahima',
        marks: 9,
    },
    {
        name: 'saurav',
        marks: 8,
    },
    {
        name: 'puneet',
        marks: 10,
    },
    {
        name: 'suboor',
        marks: 7,
    },
];

const classB = [
    {
        name: 'prashant',
        marks: 12,
    },
    {
        name: 'zahid',
        marks: 4,
    },
    {
        name: 'shivam',
        marks: 17,
    },
    {
        name: 'sanjeet',
        marks: 9,
    },
    {
        name: 'lala',
        marks: 7,
    },
];

const findTopThreeStudent = (stdA, stdB) => {
    let allClass = [...stdA, ...stdB]
    // console.log(allClass, "allclass")
    const totalMarks = allClass.sort((a, b) => a.marks - b.marks)

    // console.log(totalMarks, "allclass")
    return totalMarks.slice(-3)
}

console.log(findTopThreeStudent(classA, classB))
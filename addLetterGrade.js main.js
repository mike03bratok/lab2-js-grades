function addLetterGrade(data) {
    const result = [];

    for (const student of data) {
        let letter;

        if (student.score >= 90) {
            letter = "A";
        } else if (student.score >= 75) {
            letter = "B";
        } else {
            letter = "C";
        }

        result.push({
            ...student,
            letter
        });
    }

    return result;
}

module.exports = addLetterGrade;


/////


const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

function calculateAverage(data) {
    let sum = 0;

    for (const student of data) {
        sum += student.score;
    }

    return sum / data.length;
}

function findTopStudent(data) {
    let best = data[0];

    for (const student of data) {
        if (student.score > best.score) {
            best = student;
        }
    }

    return best.name;
}

function filterFailed(data, passScore) {
    const result = [];

    for (const student of data) {
        if (student.score < passScore) {
            result.push(student.name);
        }
    }

    return result;
}

function addLetterGrade(data) {
    const result = [];

    for (const student of data) {
        let letter;

        if (student.score >= 90) {
            letter = "A";
        } else if (student.score >= 75) {
            letter = "B";
        } else {
            letter = "C";
        }

        result.push({
            ...student,
            letter
        });
    }

    return result;
}

console.log("Средний балл:", calculateAverage(grades));
console.log("Лучший студент:", findTopStudent(grades));
console.log("Не сдали:", filterFailed(grades, 60));
console.log("Оценки:", addLetterGrade(grades));

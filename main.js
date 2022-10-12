const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const nameInput = document.getElementById("nameInput")
const foodBtn = document.getElementById("foodButton")
const factBtn = document.getElementById("factButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

const getFood = () => {
    axios.get("http://localhost:4000/api/foods/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
}

foodBtn.addEventListener('click', getFood)

const getFact = () => {
    axios.get("http://localhost:4000/api/fact/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

factBtn.addEventListener('click', getFact);

const submitName = () => {
    axios.post("http://localhost:4000/api/name/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
}

nameInput.addEventListener('click', submitName)
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A lifetime friend shall soon be made", "A lifetime of hapiness lies ahead of you", "A pleasant surprise is waiting for you", "All will go well with your new project", "All your hard work will soon pay off"];

        let randomItem = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomItem];

        res.status(200).send(randomFortune);
    },

    getFood: (req, res) => {
        const food = ["Tacos and rice", "Chicken Parmesan", "Steak with Baked Potato", "Hearty Bowl of Chili"];

        let randomInt = Math.floor(Math.random() * food.length);
        let randomFood = food[randomInt];

        res.status(200).send(randomFood);
    },

    getFact: (req, res) => {
        const facts = ["The majority of your brain is fat", "You might be drinking water that is older than the solar system", "Green Eggs and Ham was started as a bet", "too much water can kill you"];

        let random1 = Math.floor(Math.random() * facts.length);
        let randomFact = facts[random1];

        res.status(200).send(randomFact);
    }
}



    

var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2"
});

var docClient = new AWS.DynamoDB.DocumentClient();

const excercises = {
    "items": [
        {
            "type": "Chest",
            "name": "Bench Press",
            "description": "a weightlifting exercise in which one lies supine on a bench and with both hands pushes a barbell or fixed weight upward from chest level to arm's length and then lowers it back to chest level: usually repeated in sets.",
        },
        {
            "type": "Chest",
            "name": "Dumbell Fly",
            "description": "The dumbbell chest fly is an upper body exercise that can help to strengthen the chest and shoulders. The traditional way to perform a dumbbell chest fly is to do the move while lying on your back on a flat or incline bench. There’s also a standing variation.",
        },
        {
            "type": "Chest",
            "name": "Chest Dips",
            "description": "The chest dip is a bodyweight exercise performed on parallel bars or on a pull-up and dip station. It targets the chest, triceps, and shoulders. Dips with a chest focus are usually performed with the torso leaning forward and the elbows angled out from the torso. Dips can be performed for low reps for strength or higher reps for muscle growth.",
        },
        {
            "type": "Shoulder",
            "name": "Military Press",
            "description": "The press, overhead press (abbreviated OHP) or shoulder press is a weight training exercise with many variations, typically performed while standing, in which a weight is pressed straight upwards from racking position until the arms are locked out overhead, while the legs, lower back and abs maintain balance",
        },
        {
            "type": "Shoulder",
            "name": "Standing Dumbbell Fly",
            "description": "Hold a dumbbell in each hand by your sides. Without shrugging, use your upper body to swing the weights up a few inches. Your arms and torso will form an upside down V shape. Think of it as a lateral raise with momentum but without full range of motion.",
        },
        {
            "type": "Back",
            "name": "Weighted Pullup",
            "description": "Attach a weighted belt to your waist, hold a dumbbell between your feet, or—if you can’t complete your reps with weight—use body weight alone. Hang from a pullup bar with your hands just outside shoulder width. Pull yourself up until your chin is over the bar.",
        },
        {
            "type": "Back",
            "name": "Deadlift",
            "description": "Stand with feet hip-width apart and bend your hips back. Your grip should be just outside of your knees. Keeping a flat black, extend your hips to stand up, and pull the bar up along your body until lock-out, as your hips drive through and your shoulders move back. While pulling, keep your eyes on the ground a few feet in front of you. Carefully lower the bar back to the starting position.",
        },
        {
            "type": "Back",
            "name": "Seated Cable Row",
            "description": "Attach a straight or lat-pulldown bar to the pulley of a seated row station. Sit on the bench (or floor) with your feet against the foot plate and knees slightly bent. Keeping your lower back flat, bend forward at the hips to grasp the bar and row it to your sternum, squeezing your shoulder blades together in the end position. Extend your arms and feel the stretch in your back before beginning the next rep.",
        },
        {
            "type": "Back",
            "name": "Aquaman",
            "description": "Set up as you did for the back extension and then raise your left arm and right leg off the floor. Hold at the top for a second with both limbs straight and then lower back down. Repeat with your right arm and left leg. That’s one rep.",
        },
        {
            "type": "Legs",
            "name": "Front Squat",
            "description": "Set a barbell on a power rack at about shoulder height. Grab the power with an overhand grip at shoulder width and raise your elbows until your upper arms are parallel to the floor. Take the bar out of the rack and let it rest on your fingertips. Your elbows should be all the way up throughout the movement. Step back and set your feet at shoulder width with toes turned out slightly. Squat as low as you can without losing the arch in your lower back.",
        },
        {
            "type": "Legs",
            "name": "Bulgarian Split Squat",
            "description": "Stand lunge-length in front of a bench. Hold a dumbbell in each hand and rest the top of your left foot on the bench behind you. Lower your body until your rear knee nearly touches the floor and your front thigh is parallel to the floor. Single-leg training can yield serious strength gains. ",
        },
        {
            "type": "Arms",
            "name": "Hammer Curl",
            "description": "Hold a dumbbell in each hand with palms facing your sides and arms extended straight down. Keeping your upper arms against your sides, curl both weights at the same time, minimizing momentum used during the curl.",
        },

    ]
}

exports.handler = (event, context, callback) => {
    const tableName = "workout-dictionary-excercises"
    // const params = {
    //     TableName: tableName,
    //     Item: {
    //         "type": "Chest",
    //         "name": "Bench Press",
    //         "description": "a weightlifting exercise in which one lies supine on a bench and with both hands pushes a barbell or fixed weight upward from chest level to arm's length and then lowers it back to chest level: usually repeated in sets.",
    //     }
    // }


    // docClient.put(params, function (err, data) {
    //     if (err) {
    //         console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    //     } else {
    //         callback(null, "Added item:", JSON.stringify(data, null, 2))
    //     }
    // });

    const recipes = JSON.parse(JSON.stringify(excercises))

    for (let index in recipes.items) {
        let item = recipes.items[index]

        const params = {
            TableName: tableName,
            Item: item
        }

        docClient.put(params).promise()
            .then(req => {
                console.log(req)
            })
            .catch(err => {
                console.log(err)
            })

    }

};
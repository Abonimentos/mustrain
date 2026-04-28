// ============================
// EXERCISE DATABASE - THREE LEVELS
// ============================

const exerciseDatabase = {
    office: {
        "Left Biceps": [
            { name: "Wall Push Pulls", sets: "3 sets", reps: "12-15 reps", description: "Stand arm's length from wall. Pull your body toward wall using bicep. Great desk break exercise." },
            { name: "Water Bottle Curls", sets: "3 sets", reps: "15-20 reps", description: "Use filled water bottles as weights. Curl slowly with focus on bicep contraction." },
            { name: "Doorway Curls", sets: "3 sets", reps: "10-12 reps", description: "Stand in doorway, grip frame at waist height, lean back and curl yourself up." },
            { name: "Isometric Hold", sets: "3 sets", reps: "30 sec", description: "Hold arm at 90 degrees with resistance (desk edge, bag). Simple but effective for strength." }
        ],
        "Right Biceps": [
            { name: "Wall Push Pulls", sets: "3 sets", reps: "12-15 reps", description: "Stand arm's length from wall. Pull your body toward wall using bicep. Great desk break exercise." },
            { name: "Water Bottle Curls", sets: "3 sets", reps: "15-20 reps", description: "Use filled water bottles as weights. Curl slowly with focus on bicep contraction." },
            { name: "Doorway Curls", sets: "3 sets", reps: "10-12 reps", description: "Stand in doorway, grip frame at waist height, lean back and curl yourself up." },
            { name: "Isometric Hold", sets: "3 sets", reps: "30 sec", description: "Hold arm at 90 degrees with resistance (desk edge, bag). Simple but effective for strength." }
        ],
        "Left Chest": [
            { name: "Wall Push-ups", sets: "3 sets", reps: "15-20 reps", description: "Perfect for office. Stand facing wall, push away. Easier than floor push-ups." },
            { name: "Desk Push-ups", sets: "3 sets", reps: "12-15 reps", description: "Hands on desk edge, feet back. Great for chest and arms during work breaks." },
            { name: "Floor Push-ups", sets: "3 sets", reps: "8-12 reps", description: "Classic push-up. Can be done anywhere with no equipment needed." },
            { name: "Knee Push-ups", sets: "3 sets", reps: "12-15 reps", description: "Modified push-up with knees on ground. Perfect for building strength gradually." }
        ],
        "Right Chest": [
            { name: "Wall Push-ups", sets: "3 sets", reps: "15-20 reps", description: "Perfect for office. Stand facing wall, push away. Easier than floor push-ups." },
            { name: "Desk Push-ups", sets: "3 sets", reps: "12-15 reps", description: "Hands on desk edge, feet back. Great for chest and arms during work breaks." },
            { name: "Floor Push-ups", sets: "3 sets", reps: "8-12 reps", description: "Classic push-up. Can be done anywhere with no equipment needed." },
            { name: "Knee Push-ups", sets: "3 sets", reps: "12-15 reps", description: "Modified push-up with knees on ground. Perfect for building strength gradually." }
        ],
        "Left Forearm": [
            { name: "Finger Taps", sets: "3 sets", reps: "20 reps", description: "Tap each finger to thumb rapidly. Great for forearm and hand dexterity." },
            { name: "Wrist Circles", sets: "3 sets", reps: "15 each way", description: "Rotate wrists in circles. Prevents strain from typing and mouse work." },
            { name: "Grip Squeeze", sets: "3 sets", reps: "30 sec", description: "Squeeze a stress ball or bunched towel. Builds grip strength at desk." },
            { name: "Prayer Stretch", sets: "3 sets", reps: "30 sec", description: "Hands together, push down gently. Stretches and strengthens forearms." }
        ],
        "Right Forearm": [
            { name: "Finger Taps", sets: "3 sets", reps: "20 reps", description: "Tap each finger to thumb rapidly. Great for forearm and hand dexterity." },
            { name: "Wrist Circles", sets: "3 sets", reps: "15 each way", description: "Rotate wrists in circles. Prevents strain from typing and mouse work." },
            { name: "Grip Squeeze", sets: "3 sets", reps: "30 sec", description: "Squeeze a stress ball or bunched towel. Builds grip strength at desk." },
            { name: "Prayer Stretch", sets: "3 sets", reps: "30 sec", description: "Hands together, push down gently. Stretches and strengthens forearms." }
        ],
        "Left Shoulder": [
            { name: "Arm Circles", sets: "3 sets", reps: "15 each way", description: "Extend arms to sides, make circles. Simple shoulder warm-up and strengthener." },
            { name: "Wall Angels", sets: "3 sets", reps: "12-15 reps", description: "Back against wall, move arms up and down like snow angel. Great posture exercise." },
            { name: "Water Bottle Press", sets: "3 sets", reps: "12-15 reps", description: "Press water bottles overhead. Light resistance for shoulder strength." },
            { name: "Shoulder Taps", sets: "3 sets", reps: "20 reps", description: "In plank position, tap opposite shoulder. Works shoulders and core." }
        ],
        "Right Shoulder": [
            { name: "Arm Circles", sets: "3 sets", reps: "15 each way", description: "Extend arms to sides, make circles. Simple shoulder warm-up and strengthener." },
            { name: "Wall Angels", sets: "3 sets", reps: "12-15 reps", description: "Back against wall, move arms up and down like snow angel. Great posture exercise." },
            { name: "Water Bottle Press", sets: "3 sets", reps: "12-15 reps", description: "Press water bottles overhead. Light resistance for shoulder strength." },
            { name: "Shoulder Taps", sets: "3 sets", reps: "20 reps", description: "In plank position, tap opposite shoulder. Works shoulders and core." }
        ],
        "Trapezius": [
            { name: "Shoulder Shrugs", sets: "3 sets", reps: "15-20 reps", description: "Shrug shoulders up toward ears. Can hold books or water bottles for resistance." },
            { name: "Desk Shrugs", sets: "3 sets", reps: "15 reps", description: "Seated, press palms on desk and shrug. Great for trap activation at work." },
            { name: "Neck Rolls", sets: "3 sets", reps: "10 each way", description: "Slowly roll neck in circles. Releases tension in upper traps." },
            { name: "Wall Slides", sets: "3 sets", reps: "12 reps", description: "Back to wall, slide arms up and down. Activates traps and improves posture." }
        ],
        "Left Lateral Deltoid": [
            { name: "Lateral Arm Raises", sets: "3 sets", reps: "12-15 reps", description: "Raise arms to sides without weight. Focus on form and muscle activation." },
            { name: "Water Bottle Raises", sets: "3 sets", reps: "15 reps", description: "Raise water bottles to shoulder height. Light resistance for side delts." },
            { name: "Wall Push Away", sets: "3 sets", reps: "12 reps", description: "Side to wall, push away with one arm. Works lateral deltoid effectively." },
            { name: "Desk Dips", sets: "3 sets", reps: "10-12 reps", description: "Hands on desk behind you, dip down. Works shoulders and triceps." }
        ],
        "Right Lateral Deltoid": [
            { name: "Lateral Arm Raises", sets: "3 sets", reps: "12-15 reps", description: "Raise arms to sides without weight. Focus on form and muscle activation." },
            { name: "Water Bottle Raises", sets: "3 sets", reps: "15 reps", description: "Raise water bottles to shoulder height. Light resistance for side delts." },
            { name: "Wall Push Away", sets: "3 sets", reps: "12 reps", description: "Side to wall, push away with one arm. Works lateral deltoid effectively." },
            { name: "Desk Dips", sets: "3 sets", reps: "10-12 reps", description: "Hands on desk behind you, dip down. Works shoulders and triceps." }
        ],
        "Abs": [
            { name: "Seated Knee Raises", sets: "3 sets", reps: "15-20 reps", description: "Sit on chair, raise knees toward chest. Perfect desk exercise for abs." },
            { name: "Standing Twists", sets: "3 sets", reps: "20 reps", description: "Stand and twist torso side to side. Engages obliques and abs." },
            { name: "Floor Crunches", sets: "3 sets", reps: "15-20 reps", description: "Lie on back, crunch up. Classic ab exercise that needs no equipment." },
            { name: "Plank Hold", sets: "3 sets", reps: "30-45 sec", description: "Hold plank position. Engages entire core with no equipment needed." },
            { name: "Bicycle Crunches", sets: "3 sets", reps: "15 reps", description: "Lie on back, alternate elbow to knee. Great for abs and obliques." }
        ],
        "Obliques": [
            { name: "Standing Side Bends", sets: "3 sets", reps: "15 each side", description: "Stand and bend to each side. Simple oblique exercise for office." },
            { name: "Seated Twists", sets: "3 sets", reps: "20 reps", description: "Sit in chair, twist torso side to side. Works obliques at your desk." },
            { name: "Side Plank", sets: "3 sets", reps: "20-30 sec", description: "Hold side plank position. Excellent for oblique strength and stability." },
            { name: "Standing Knee to Elbow", sets: "3 sets", reps: "12 each side", description: "Bring knee to opposite elbow while standing. Dynamic oblique work." }
        ],
        "Left Quadriceps": [
            { name: "Chair Squats", sets: "3 sets", reps: "15-20 reps", description: "Squat down to chair and stand up. Perfect for office leg training." },
            { name: "Wall Sit", sets: "3 sets", reps: "30-45 sec", description: "Sit against wall with knees at 90 degrees. Builds quad endurance." },
            { name: "Standing Lunges", sets: "3 sets", reps: "10 each leg", description: "Lunge forward alternating legs. Great quad exercise with no equipment." },
            { name: "Step-ups", sets: "3 sets", reps: "12 each leg", description: "Step up onto chair or platform. Works quads and glutes effectively." },
            { name: "Bodyweight Squats", sets: "3 sets", reps: "15-20 reps", description: "Classic squat with just bodyweight. Foundation of leg training." }
        ],
        "Right Quadriceps": [
            { name: "Chair Squats", sets: "3 sets", reps: "15-20 reps", description: "Squat down to chair and stand up. Perfect for office leg training." },
            { name: "Wall Sit", sets: "3 sets", reps: "30-45 sec", description: "Sit against wall with knees at 90 degrees. Builds quad endurance." },
            { name: "Standing Lunges", sets: "3 sets", reps: "10 each leg", description: "Lunge forward alternating legs. Great quad exercise with no equipment." },
            { name: "Step-ups", sets: "3 sets", reps: "12 each leg", description: "Step up onto chair or platform. Works quads and glutes effectively." },
            { name: "Bodyweight Squats", sets: "3 sets", reps: "15-20 reps", description: "Classic squat with just bodyweight. Foundation of leg training." }
        ],
        "Left Adductors": [
            { name: "Seated Leg Squeeze", sets: "3 sets", reps: "30 sec", description: "Sit with object between knees, squeeze. Simple adductor exercise at desk." },
            { name: "Standing Leg Crosses", sets: "3 sets", reps: "12 each leg", description: "Cross one leg in front of other. Works inner thighs standing." },
            { name: "Sumo Squat", sets: "3 sets", reps: "15 reps", description: "Wide stance squat. Targets adductors with bodyweight only." },
            { name: "Side Lunges", sets: "3 sets", reps: "10 each side", description: "Lunge to the side. Great for adductor flexibility and strength." }
        ],
        "Right Adductors": [
            { name: "Seated Leg Squeeze", sets: "3 sets", reps: "30 sec", description: "Sit with object between knees, squeeze. Simple adductor exercise at desk." },
            { name: "Standing Leg Crosses", sets: "3 sets", reps: "12 each leg", description: "Cross one leg in front of other. Works inner thighs standing." },
            { name: "Sumo Squat", sets: "3 sets", reps: "15 reps", description: "Wide stance squat. Targets adductors with bodyweight only." },
            { name: "Side Lunges", sets: "3 sets", reps: "10 each side", description: "Lunge to the side. Great for adductor flexibility and strength." }
        ],
        "Left Calves": [
            { name: "Seated Calf Raises", sets: "3 sets", reps: "20-25 reps", description: "Sit on chair, raise heels off ground. Easy calf exercise at desk." },
            { name: "Standing Calf Raises", sets: "3 sets", reps: "20-25 reps", description: "Stand and raise up on toes. Can be done anywhere, anytime." },
            { name: "Single Leg Raises", sets: "3 sets", reps: "15 each leg", description: "Calf raise on one leg. More challenging variation for progression." },
            { name: "Stair Calf Raises", sets: "3 sets", reps: "15-20 reps", description: "Use stairs for extra range of motion. Great stretch and contraction." }
        ],
        "Right Calves": [
            { name: "Seated Calf Raises", sets: "3 sets", reps: "20-25 reps", description: "Sit on chair, raise heels off ground. Easy calf exercise at desk." },
            { name: "Standing Calf Raises", sets: "3 sets", reps: "20-25 reps", description: "Stand and raise up on toes. Can be done anywhere, anytime." },
            { name: "Single Leg Raises", sets: "3 sets", reps: "15 each leg", description: "Calf raise on one leg. More challenging variation for progression." },
            { name: "Stair Calf Raises", sets: "3 sets", reps: "15-20 reps", description: "Use stairs for extra range of motion. Great stretch and contraction." }
        ],
        "Left Tibialis": [
            { name: "Toe Taps", sets: "3 sets", reps: "20-25 reps", description: "Tap toes up and down while seated. Simple shin strengthener." },
            { name: "Heel Walks", sets: "3 sets", reps: "30 sec", description: "Walk on heels with toes elevated. Works tibialis effectively." },
            { name: "Ankle Circles", sets: "3 sets", reps: "15 each way", description: "Rotate ankle in circles. Good for mobility and shin strength." },
            { name: "Seated Dorsiflexion", sets: "3 sets", reps: "20 reps", description: "Lift toes toward shin while seated. Prevents shin splints." }
        ],
        "Right Tibialis": [
            { name: "Toe Taps", sets: "3 sets", reps: "20-25 reps", description: "Tap toes up and down while seated. Simple shin strengthener." },
            { name: "Heel Walks", sets: "3 sets", reps: "30 sec", description: "Walk on heels with toes elevated. Works tibialis effectively." },
            { name: "Ankle Circles", sets: "3 sets", reps: "15 each way", description: "Rotate ankle in circles. Good for mobility and shin strength." },
            { name: "Seated Dorsiflexion", sets: "3 sets", reps: "20 reps", description: "Lift toes toward shin while seated. Prevents shin splints." }
        ],
        "Head": [
            { name: "Reading & Learning", sets: "Daily", reps: "30+ min", description: "📚 Read books, articles, and research papers to expand knowledge and cognitive abilities." },
            { name: "Problem Solving", sets: "Daily", reps: "15+ min", description: "🧩 Work on puzzles, math problems, or coding challenges to sharpen analytical thinking." },
            { name: "Meditation", sets: "Daily", reps: "10-20 min", description: "🧘 Practice mindfulness and meditation to improve focus, reduce stress, and enhance mental clarity." },
            { name: "Creative Thinking", sets: "3-4x/week", reps: "20+ min", description: "🎨 Engage in creative activities like writing, drawing, or brainstorming to boost innovation." },
            { name: "Physical Exercise", sets: "Daily", reps: "30+ min", description: "🏃 Regular cardio and strength training improve brain health, memory, and cognitive function." }
        ]
         ,
        "Upper Trapezius": [
            { name: "Shoulder Shrugs", sets: "3 sets", reps: "15-20 reps", description: "Shrug shoulders up toward ears. Can hold books or water bottles for resistance." },
            { name: "Desk Shrugs", sets: "3 sets", reps: "15 reps", description: "Seated, press palms on desk and shrug. Great for trap activation at work." },
            { name: "Neck Rolls", sets: "3 sets", reps: "10 each way", description: "Slowly roll neck in circles. Releases tension in upper traps." }
        ],
        "Left Trapezius": [
            { name: "Shoulder Shrugs", sets: "3 sets", reps: "15-20 reps", description: "Shrug shoulders up toward ears. Hold water bottles for resistance." },
            { name: "Wall Slides", sets: "3 sets", reps: "12 reps", description: "Back to wall, slide arms up and down. Activates traps." }
        ],
        "Right Trapezius": [
            { name: "Shoulder Shrugs", sets: "3 sets", reps: "15-20 reps", description: "Shrug shoulders up toward ears. Hold water bottles for resistance." },
            { name: "Wall Slides", sets: "3 sets", reps: "12 reps", description: "Back to wall, slide arms up and down. Activates traps." }
        ],
        "Left Rear Deltoid": [
            { name: "Reverse Arm Circles", sets: "3 sets", reps: "15 each way", description: "Circle arms backward. Simple rear delt activation." },
            { name: "Water Bottle Reverse Fly", sets: "3 sets", reps: "12-15 reps", description: "Bend forward, lift bottles out to sides. Light rear delt work." }
        ],
        "Right Rear Deltoid": [
            { name: "Reverse Arm Circles", sets: "3 sets", reps: "15 each way", description: "Circle arms backward. Simple rear delt activation." },
            { name: "Water Bottle Reverse Fly", sets: "3 sets", reps: "12-15 reps", description: "Bend forward, lift bottles out to sides. Light rear delt work." }
        ],
        "Left Triceps": [
            { name: "Desk Dips", sets: "3 sets", reps: "10-12 reps", description: "Hands on desk behind you, dip down. Works triceps effectively." },
            { name: "Wall Push-ups (Close Grip)", sets: "3 sets", reps: "12-15 reps", description: "Hands close together on wall. Targets triceps." },
            { name: "Diamond Push-ups (Knee)", sets: "3 sets", reps: "8-10 reps", description: "Hands in diamond, push-ups on knees. Great tricep builder." }
        ],
        "Right Triceps": [
            { name: "Desk Dips", sets: "3 sets", reps: "10-12 reps", description: "Hands on desk behind you, dip down. Works triceps effectively." },
            { name: "Wall Push-ups (Close Grip)", sets: "3 sets", reps: "12-15 reps", description: "Hands close together on wall. Targets triceps." },
            { name: "Diamond Push-ups (Knee)", sets: "3 sets", reps: "8-10 reps", description: "Hands in diamond, push-ups on knees. Great tricep builder." }
        ],
        "Left Lat": [
            { name: "Doorway Pull", sets: "3 sets", reps: "12 reps", description: "Hold doorframe, lean back and pull forward. Simple lat engagement." },
            { name: "Seated Rows (Towel)", sets: "3 sets", reps: "15 reps", description: "Loop towel around feet, pull toward chest. Good lat work." }
        ],
        "Right Lat": [
            { name: "Doorway Pull", sets: "3 sets", reps: "12 reps", description: "Hold doorframe, lean back and pull forward. Simple lat engagement." },
            { name: "Seated Rows (Towel)", sets: "3 sets", reps: "15 reps", description: "Loop towel around feet, pull toward chest. Good lat work." }
        ],
        "Left Upper Back": [
            { name: "Wall Angels", sets: "3 sets", reps: "12-15 reps", description: "Back against wall, move arms up and down. Great upper back exercise." },
            { name: "Shoulder Blade Squeeze", sets: "3 sets", reps: "15 reps", description: "Squeeze shoulder blades together. Activates upper back." }
        ],
        "Right Upper Back": [
            { name: "Wall Angels", sets: "3 sets", reps: "12-15 reps", description: "Back against wall, move arms up and down. Great upper back exercise." },
            { name: "Shoulder Blade Squeeze", sets: "3 sets", reps: "15 reps", description: "Squeeze shoulder blades together. Activates upper back." }
        ],
        "Left Erector Spinae": [
            { name: "Superman Hold", sets: "3 sets", reps: "20-30 sec", description: "Lie face down, lift arms and legs. Excellent lower back strengthener." },
            { name: "Bird Dog", sets: "3 sets", reps: "10 each side", description: "Extend opposite arm and leg. Core and lower back stability." }
        ],
        "Right Erector Spinae": [
            { name: "Superman Hold", sets: "3 sets", reps: "20-30 sec", description: "Lie face down, lift arms and legs. Excellent lower back strengthener." },
            { name: "Bird Dog", sets: "3 sets", reps: "10 each side", description: "Extend opposite arm and leg. Core and lower back stability." }
        ],
        "Left External Oblique": [
            { name: "Standing Side Bends", sets: "3 sets", reps: "15 each side", description: "Bend to each side. Simple oblique exercise." },
            { name: "Side Plank", sets: "3 sets", reps: "20-30 sec", description: "Hold side plank. Excellent for oblique strength." }
        ],
        "Right External Oblique": [
            { name: "Standing Side Bends", sets: "3 sets", reps: "15 each side", description: "Bend to each side. Simple oblique exercise." },
            { name: "Side Plank", sets: "3 sets", reps: "20-30 sec", description: "Hold side plank. Excellent for oblique strength." }
        ],
        "Left Glute": [
            { name: "Glute Bridges", sets: "3 sets", reps: "15-20 reps", description: "Lie on back, lift hips up. Perfect bodyweight glute exercise." },
            { name: "Single Leg Bridge", sets: "3 sets", reps: "10-12 each", description: "Bridge with one leg. More challenging variation." },
            { name: "Standing Kickbacks", sets: "3 sets", reps: "15 each", description: "Hold desk, kick leg back. Simple glute activation." }
        ],
        "Right Glute": [
            { name: "Glute Bridges", sets: "3 sets", reps: "15-20 reps", description: "Lie on back, lift hips up. Perfect bodyweight glute exercise." },
            { name: "Single Leg Bridge", sets: "3 sets", reps: "10-12 each", description: "Bridge with one leg. More challenging variation." },
            { name: "Standing Kickbacks", sets: "3 sets", reps: "15 each", description: "Hold desk, kick leg back. Simple glute activation." }
        ],
        "Left Hamstring": [
            { name: "Nordic Curls (Assisted)", sets: "3 sets", reps: "6-8 reps", description: "Hook feet, lower forward slowly. Intense hamstring work." },
            { name: "Good Mornings", sets: "3 sets", reps: "12-15 reps", description: "Hinge at hips, back straight. Great hamstring exercise." },
            { name: "Single Leg Deadlift", sets: "3 sets", reps: "10 each", description: "Balance on one leg, hinge forward. Hamstring work." }
        ],
        "Right Hamstring": [
            { name: "Nordic Curls (Assisted)", sets: "3 sets", reps: "6-8 reps", description: "Hook feet, lower forward slowly. Intense hamstring work." },
            { name: "Good Mornings", sets: "3 sets", reps: "12-15 reps", description: "Hinge at hips, back straight. Great hamstring exercise." },
            { name: "Single Leg Deadlift", sets: "3 sets", reps: "10 each", description: "Balance on one leg, hinge forward. Hamstring work." }
        ],
        "Left Calf": [
            { name: "Seated Calf Raises", sets: "3 sets", reps: "20-25 reps", description: "Sit on chair, raise heels. Easy calf exercise." },
            { name: "Standing Calf Raises", sets: "3 sets", reps: "20-25 reps", description: "Stand and raise on toes. Can be done anywhere." },
            { name: "Stair Calf Raises", sets: "3 sets", reps: "15-20 reps", description: "Use stairs for range. Great stretch and contraction." }
        ],
        "Right Calf": [
            { name: "Seated Calf Raises", sets: "3 sets", reps: "20-25 reps", description: "Sit on chair, raise heels. Easy calf exercise." },
            { name: "Standing Calf Raises", sets: "3 sets", reps: "20-25 reps", description: "Stand and raise on toes. Can be done anywhere." },
            { name: "Stair Calf Raises", sets: "3 sets", reps: "15-20 reps", description: "Use stairs for range. Great stretch and contraction." }
        ]
    },
    
    street: {
        "Left Biceps": [
            { name: "Chin-ups", sets: "4 sets", reps: "6-10 reps", description: "King of bicep exercises. Pull yourself up with underhand grip on bar." },
            { name: "Inverted Rows", sets: "3 sets", reps: "10-15 reps", description: "Hang under low bar, pull chest to bar. Great bicep and back builder." },
            { name: "Close-Grip Pull-ups", sets: "3 sets", reps: "8-12 reps", description: "Narrow grip pull-up. Heavy bicep activation with bodyweight." },
            { name: "Resistance Band Curls", sets: "3 sets", reps: "15-20 reps", description: "Step on band and curl. Portable resistance for bicep training." }
        ],
        "Right Biceps": [
            { name: "Chin-ups", sets: "4 sets", reps: "6-10 reps", description: "King of bicep exercises. Pull yourself up with underhand grip on bar." },
            { name: "Inverted Rows", sets: "3 sets", reps: "10-15 reps", description: "Hang under low bar, pull chest to bar. Great bicep and back builder." },
            { name: "Close-Grip Pull-ups", sets: "3 sets", reps: "8-12 reps", description: "Narrow grip pull-up. Heavy bicep activation with bodyweight." },
            { name: "Resistance Band Curls", sets: "3 sets", reps: "15-20 reps", description: "Step on band and curl. Portable resistance for bicep training." }
        ],
        "Left Chest": [
            { name: "Bar Dips", sets: "4 sets", reps: "8-12 reps", description: "Parallel bar dips leaning forward. The ultimate chest builder for street workout." },
            { name: "Wide Grip Dips", sets: "3 sets", reps: "6-10 reps", description: "Use wider bars or rings. Targets chest more than triceps." },
            { name: "Weighted Dips", sets: "3 sets", reps: "6-10 reps", description: "Add weight with backpack or dip belt. Progressive overload for chest." },
            { name: "Ring Push-ups", sets: "3 sets", reps: "10-15 reps", description: "Push-ups on gymnastic rings. Unstable surface crushes chest and core." }
        ],
        "Right Chest": [
            { name: "Bar Dips", sets: "4 sets", reps: "8-12 reps", description: "Parallel bar dips leaning forward. The ultimate chest builder for street workout." },
            { name: "Wide Grip Dips", sets: "3 sets", reps: "6-10 reps", description: "Use wider bars or rings. Targets chest more than triceps." },
            { name: "Weighted Dips", sets: "3 sets", reps: "6-10 reps", description: "Add weight with backpack or dip belt. Progressive overload for chest." },
            { name: "Ring Push-ups", sets: "3 sets", reps: "10-15 reps", description: "Push-ups on gymnastic rings. Unstable surface crushes chest and core." }
        ],
        "Left Forearm": [
            { name: "Dead Hangs", sets: "3 sets", reps: "45-60 sec", description: "Hang from pull-up bar. Best grip and forearm endurance builder." },
            { name: "Towel Hangs", sets: "3 sets", reps: "30-45 sec", description: "Hang from towel draped over bar. Extreme grip challenge." },
            { name: "Bar Holds", sets: "3 sets", reps: "30-60 sec", description: "Hold thick bar or use fat grips. Builds crushing grip strength." },
            { name: "Wrist Rolls", sets: "3 sets", reps: "10 each way", description: "Hang from bar, rotate wrists. Strengthens wrist and forearm control." }
        ],
        "Right Forearm": [
            { name: "Dead Hangs", sets: "3 sets", reps: "45-60 sec", description: "Hang from pull-up bar. Best grip and forearm endurance builder." },
            { name: "Towel Hangs", sets: "3 sets", reps: "30-45 sec", description: "Hang from towel draped over bar. Extreme grip challenge." },
            { name: "Bar Holds", sets: "3 sets", reps: "30-60 sec", description: "Hold thick bar or use fat grips. Builds crushing grip strength." },
            { name: "Wrist Rolls", sets: "3 sets", reps: "10 each way", description: "Hang from bar, rotate wrists. Strengthens wrist and forearm control." }
        ],
        "Left Shoulder": [
            { name: "Pike Push-ups", sets: "4 sets", reps: "10-15 reps", description: "Hips up high, push-up with shoulders. Excellent bodyweight shoulder builder." },
            { name: "Handstand Push-ups", sets: "3 sets", reps: "5-10 reps", description: "Advanced move. Push-up in handstand position. Ultimate shoulder exercise." },
            { name: "Pseudo Planche Push-ups", sets: "3 sets", reps: "8-12 reps", description: "Lean forward in push-up position. Incredible shoulder and core strength." },
            { name: "L-Sit Holds", sets: "3 sets", reps: "20-30 sec", description: "Hold body in L-shape on bars. Works shoulders and core intensely." }
        ],
        "Right Shoulder": [
            { name: "Pike Push-ups", sets: "4 sets", reps: "10-15 reps", description: "Hips up high, push-up with shoulders. Excellent bodyweight shoulder builder." },
            { name: "Handstand Push-ups", sets: "3 sets", reps: "5-10 reps", description: "Advanced move. Push-up in handstand position. Ultimate shoulder exercise." },
            { name: "Pseudo Planche Push-ups", sets: "3 sets", reps: "8-12 reps", description: "Lean forward in push-up position. Incredible shoulder and core strength." },
            { name: "L-Sit Holds", sets: "3 sets", reps: "20-30 sec", description: "Hold body in L-shape on bars. Works shoulders and core intensely." }
        ],
        "Trapezius": [
            { name: "Pull-up Shrugs", sets: "4 sets", reps: "12-15 reps", description: "Hang from bar, shrug shoulders up. Excellent trap activation." },
            { name: "Muscle-ups", sets: "3 sets", reps: "3-6 reps", description: "Advanced pull-up to dip transition. Heavy trap and overall upper body work." },
            { name: "Inverted Shrugs", sets: "3 sets", reps: "15 reps", description: "In handstand, shrug shoulders. Advanced trap strengthening." },
            { name: "Face Pulls (Band)", sets: "3 sets", reps: "15-20 reps", description: "Use resistance band for face pulls. Great for upper traps and rear delts." }
        ],
        "Left Lateral Deltoid": [
            { name: "Handstand Hold", sets: "3 sets", reps: "30-45 sec", description: "Hold handstand against wall. Isometric lateral delt work." },
            { name: "Side Plank Raises", sets: "3 sets", reps: "12-15 reps", description: "In side plank, raise top arm. Lateral delt and core simultaneously." },
            { name: "Band Lateral Raises", sets: "3 sets", reps: "15-20 reps", description: "Use resistance band for lateral raises. Portable shoulder training." },
            { name: "Elevated Pike Push-ups", sets: "3 sets", reps: "10-12 reps", description: "Feet elevated, pike position push-up. Targets side delts heavily." }
        ],
        "Right Lateral Deltoid": [
            { name: "Handstand Hold", sets: "3 sets", reps: "30-45 sec", description: "Hold handstand against wall. Isometric lateral delt work." },
            { name: "Side Plank Raises", sets: "3 sets", reps: "12-15 reps", description: "In side plank, raise top arm. Lateral delt and core simultaneously." },
            { name: "Band Lateral Raises", sets: "3 sets", reps: "15-20 reps", description: "Use resistance band for lateral raises. Portable shoulder training." },
            { name: "Elevated Pike Push-ups", sets: "3 sets", reps: "10-12 reps", description: "Feet elevated, pike position push-up. Targets side delts heavily." }
        ],
        "Abs": [
            { name: "Hanging Leg Raises", sets: "4 sets", reps: "12-15 reps", description: "Hang from bar, raise legs to 90 degrees. Elite ab builder." },
            { name: "Dragon Flags", sets: "3 sets", reps: "6-10 reps", description: "Advanced move. Lower body from bench while holding edge. Legendary ab exercise." },
            { name: "L-Sit", sets: "3 sets", reps: "20-30 sec", description: "Hold L-position on parallel bars. Incredible core strength builder." },
            { name: "Windshield Wipers", sets: "3 sets", reps: "10-12 reps", description: "Hanging, rotate legs side to side. Advanced oblique and ab work." },
            { name: "Ab Wheel Rollouts", sets: "3 sets", reps: "10-15 reps", description: "Roll forward with ab wheel. One of the best core exercises." }
        ],
        "Obliques": [
            { name: "Hanging Knee Twists", sets: "3 sets", reps: "15 each side", description: "Hang from bar, bring knees up and twist. Great oblique activation." },
            { name: "Side Planks", sets: "3 sets", reps: "45-60 sec", description: "Hold side plank. Excellent oblique endurance and strength." },
            { name: "Russian Twists", sets: "3 sets", reps: "20-30 reps", description: "Sit in V-position, twist side to side. Can add weight for progression." },
            { name: "Bicycle Crunches", sets: "3 sets", reps: "25 reps", description: "Alternate elbow to opposite knee. Highly effective oblique exercise." }
        ],
        "Left Quadriceps": [
            { name: "Pistol Squats", sets: "4 sets", reps: "6-10 each leg", description: "Single leg squat. Ultimate bodyweight leg builder requiring balance and strength." },
            { name: "Bulgarian Split Squats", sets: "3 sets", reps: "12-15 reps", description: "Rear foot elevated, squat on front leg. Excellent quad and glute developer." },
            { name: "Jump Squats", sets: "3 sets", reps: "15 reps", description: "Explosive squat jump. Builds power and quad strength." },
            { name: "Walking Lunges", sets: "3 sets", reps: "15 each leg", description: "Lunge forward continuously. Great functional leg strength." },
            { name: "Sissy Squats", sets: "3 sets", reps: "10-12 reps", description: "Lean back while squatting. Intense quad isolation exercise." }
        ],
        "Right Quadriceps": [
            { name: "Pistol Squats", sets: "4 sets", reps: "6-10 each leg", description: "Single leg squat. Ultimate bodyweight leg builder requiring balance and strength." },
            { name: "Bulgarian Split Squats", sets: "3 sets", reps: "12-15 reps", description: "Rear foot elevated, squat on front leg. Excellent quad and glute developer." },
            { name: "Jump Squats", sets: "3 sets", reps: "15 reps", description: "Explosive squat jump. Builds power and quad strength." },
            { name: "Walking Lunges", sets: "3 sets", reps: "15 each leg", description: "Lunge forward continuously. Great functional leg strength." },
            { name: "Sissy Squats", sets: "3 sets", reps: "10-12 reps", description: "Lean back while squatting. Intense quad isolation exercise." }
        ],
        "Left Adductors": [
            { name: "Cossack Squats", sets: "3 sets", reps: "10 each side", description: "Wide stance, squat to one side. Excellent adductor mobility and strength." },
            { name: "Side Lunges", sets: "3 sets", reps: "12 each side", description: "Lunge laterally. Great for adductor flexibility and power." },
            { name: "Sumo Squats", sets: "3 sets", reps: "15-20 reps", description: "Wide stance squat. Emphasizes inner thighs and adductors." },
            { name: "Band Adduction", sets: "3 sets", reps: "15-20 reps", description: "Use resistance band for adductor pulls. Isolated inner thigh work." }
        ],
        "Right Adductors": [
            { name: "Cossack Squats", sets: "3 sets", reps: "10 each side", description: "Wide stance, squat to one side. Excellent adductor mobility and strength." },
            { name: "Side Lunges", sets: "3 sets", reps: "12 each side", description: "Lunge laterally. Great for adductor flexibility and power." },
            { name: "Sumo Squats", sets: "3 sets", reps: "15-20 reps", description: "Wide stance squat. Emphasizes inner thighs and adductors." },
            { name: "Band Adduction", sets: "3 sets", reps: "15-20 reps", description: "Use resistance band for adductor pulls. Isolated inner thigh work." }
        ],
        "Left Calves": [
            { name: "Single Leg Calf Raises", sets: "4 sets", reps: "15-20 reps", description: "Calf raise on one leg. Much harder than double leg version." },
            { name: "Jump Rope", sets: "4 sets", reps: "90 sec", description: "Jump rope continuously. Excellent calf endurance and explosiveness." },
            { name: "Box Jumps", sets: "3 sets", reps: "12-15 reps", description: "Jump onto elevated platform. Builds explosive calf power." },
            { name: "Stair Calf Raises", sets: "3 sets", reps: "20-25 reps", description: "Use stairs for deep stretch and full range calf raises." }
        ],
        "Right Calves": [
            { name: "Single Leg Calf Raises", sets: "4 sets", reps: "15-20 reps", description: "Calf raise on one leg. Much harder than double leg version." },
            { name: "Jump Rope", sets: "4 sets", reps: "90 sec", description: "Jump rope continuously. Excellent calf endurance and explosiveness." },
            { name: "Box Jumps", sets: "3 sets", reps: "12-15 reps", description: "Jump onto elevated platform. Builds explosive calf power." },
            { name: "Stair Calf Raises", sets: "3 sets", reps: "20-25 reps", description: "Use stairs for deep stretch and full range calf raises." }
        ],
        "Left Tibialis": [
            { name: "Toe Raises", sets: "3 sets", reps: "20-25 reps", description: "Raise toes while heels stay grounded. Strengthens shins." },
            { name: "Heel Walks", sets: "3 sets", reps: "45 sec", description: "Walk on heels only. Simple but effective tibialis builder." },
            { name: "Resistance Band Dorsiflexion", sets: "3 sets", reps: "20 reps", description: "Pull toes toward shin against band. Prevents shin splints." },
            { name: "Box Toe Taps", sets: "3 sets", reps: "25 reps", description: "Rapidly tap toes on elevated surface. Shin strength and endurance." }
        ],
        "Right Tibialis": [
            { name: "Toe Raises", sets: "3 sets", reps: "20-25 reps", description: "Raise toes while heels stay grounded. Strengthens shins." },
            { name: "Heel Walks", sets: "3 sets", reps: "45 sec", description: "Walk on heels only. Simple but effective tibialis builder." },
            { name: "Resistance Band Dorsiflexion", sets: "3 sets", reps: "20 reps", description: "Pull toes toward shin against band. Prevents shin splints." },
            { name: "Box Toe Taps", sets: "3 sets", reps: "25 reps", description: "Rapidly tap toes on elevated surface. Shin strength and endurance." }
        ],
        "Head": [
            { name: "Reading & Learning", sets: "Daily", reps: "30+ min", description: "📚 Read books, articles, and research papers to expand knowledge and cognitive abilities." },
            { name: "Problem Solving", sets: "Daily", reps: "15+ min", description: "🧩 Work on puzzles, math problems, or coding challenges to sharpen analytical thinking." },
            { name: "Meditation", sets: "Daily", reps: "10-20 min", description: "🧘 Practice mindfulness and meditation to improve focus, reduce stress, and enhance mental clarity." },
            { name: "Creative Thinking", sets: "3-4x/week", reps: "20+ min", description: "🎨 Engage in creative activities like writing, drawing, or brainstorming to boost innovation." },
            { name: "Physical Exercise", sets: "Daily", reps: "30+ min", description: "🏃 Regular cardio and strength training improve brain health, memory, and cognitive function." }
        ]
        ,
        "Upper Trapezius": [
            { name: "Pull-up Shrugs", sets: "4 sets", reps: "12-15 reps", description: "Hang from bar, shrug shoulders up. Excellent trap activation." },
            { name: "Muscle-up Transition", sets: "3 sets", reps: "3-5 reps", description: "Advanced pull-up to dip. Heavy trap work." },
            { name: "Face Pulls (Band)", sets: "3 sets", reps: "15-20 reps", description: "Resistance band face pulls. Great for upper traps." }
        ],
        "Left Trapezius": [
            { name: "Pull-up Shrugs", sets: "4 sets", reps: "12-15 reps", description: "Hang from bar, shrug shoulders. Trap activation." },
            { name: "Inverted Shrugs", sets: "3 sets", reps: "15 reps", description: "In handstand, shrug shoulders. Advanced trap work." }
        ],
        "Right Trapezius": [
            { name: "Pull-up Shrugs", sets: "4 sets", reps: "12-15 reps", description: "Hang from bar, shrug shoulders. Trap activation." },
            { name: "Inverted Shrugs", sets: "3 sets", reps: "15 reps", description: "In handstand, shrug shoulders. Advanced trap work." }
        ],
        "Left Rear Deltoid": [
            { name: "Band Face Pulls", sets: "3 sets", reps: "15-20 reps", description: "Pull band to face level. Excellent rear delt work." },
            { name: "Reverse Flys (Rings)", sets: "3 sets", reps: "12-15 reps", description: "Use rings for unstable reverse fly. Advanced." }
        ],
        "Right Rear Deltoid": [
            { name: "Band Face Pulls", sets: "3 sets", reps: "15-20 reps", description: "Pull band to face level. Excellent rear delt work." },
            { name: "Reverse Flys (Rings)", sets: "3 sets", reps: "12-15 reps", description: "Use rings for unstable reverse fly. Advanced." }
        ],
        "Left Triceps": [
            { name: "Bar Dips", sets: "4 sets", reps: "10-15 reps", description: "Parallel bar dips. Ultimate tricep builder for calisthenics." },
            { name: "Close-Grip Push-ups", sets: "3 sets", reps: "15-20 reps", description: "Hands together push-ups. Great tricep engagement." },
            { name: "Diamond Push-ups", sets: "3 sets", reps: "12-15 reps", description: "Hands in diamond shape. Intense tricep work." }
        ],
        "Right Triceps": [
            { name: "Bar Dips", sets: "4 sets", reps: "10-15 reps", description: "Parallel bar dips. Ultimate tricep builder for calisthenics." },
            { name: "Close-Grip Push-ups", sets: "3 sets", reps: "15-20 reps", description: "Hands together push-ups. Great tricep engagement." },
            { name: "Diamond Push-ups", sets: "3 sets", reps: "12-15 reps", description: "Hands in diamond shape. Intense tricep work." }
        ],
        "Left Lat": [
            { name: "Pull-ups (Wide Grip)", sets: "4 sets", reps: "8-12 reps", description: "Wide grip pull-ups. King of lat exercises." },
            { name: "Australian Pull-ups", sets: "3 sets", reps: "12-15 reps", description: "Low bar horizontal pulls. Great lat builder." },
            { name: "One-Arm Hangs", sets: "3 sets", reps: "20-30 sec", description: "Hang from one arm. Advanced lat engagement." }
        ],
        "Right Lat": [
            { name: "Pull-ups (Wide Grip)", sets: "4 sets", reps: "8-12 reps", description: "Wide grip pull-ups. King of lat exercises." },
            { name: "Australian Pull-ups", sets: "3 sets", reps: "12-15 reps", description: "Low bar horizontal pulls. Great lat builder." },
            { name: "One-Arm Hangs", sets: "3 sets", reps: "20-30 sec", description: "Hang from one arm. Advanced lat engagement." }
        ],
        "Left Upper Back": [
            { name: "Inverted Rows", sets: "4 sets", reps: "12-15 reps", description: "Hang under bar, pull chest up. Excellent upper back work." },
            { name: "Scapular Pull-ups", sets: "3 sets", reps: "12-15 reps", description: "Hang, pull shoulders down without bending arms. Great activation." }
        ],
        "Right Upper Back": [
            { name: "Inverted Rows", sets: "4 sets", reps: "12-15 reps", description: "Hang under bar, pull chest up. Excellent upper back work." },
            { name: "Scapular Pull-ups", sets: "3 sets", reps: "12-15 reps", description: "Hang, pull shoulders down without bending arms. Great activation." }
        ],
        "Left Erector Spinae": [
            { name: "Back Extensions (Elevated)", sets: "3 sets", reps: "15-20 reps", description: "Use bench for back extensions. Strengthens lower back." },
            { name: "Superman Holds", sets: "3 sets", reps: "45-60 sec", description: "Extended hold time. Advanced erector work." }
        ],
        "Right Erector Spinae": [
            { name: "Back Extensions (Elevated)", sets: "3 sets", reps: "15-20 reps", description: "Use bench for back extensions. Strengthens lower back." },
            { name: "Superman Holds", sets: "3 sets", reps: "45-60 sec", description: "Extended hold time. Advanced erector work." }
        ],
        "Left External Oblique": [
            { name: "Hanging Knee Twists", sets: "3 sets", reps: "15 each side", description: "Hang from bar, twist knees. Great oblique work." },
            { name: "Side Planks", sets: "3 sets", reps: "45-60 sec", description: "Extended side plank holds. Excellent oblique endurance." }
        ],
        "Right External Oblique": [
            { name: "Hanging Knee Twists", sets: "3 sets", reps: "15 each side", description: "Hang from bar, twist knees. Great oblique work." },
            { name: "Side Planks", sets: "3 sets", reps: "45-60 sec", description: "Extended side plank holds. Excellent oblique endurance." }
        ],
        "Left Glute": [
            { name: "Single Leg Box Squats", sets: "3 sets", reps: "10-12 each", description: "Squat to box on one leg. Advanced glute work." },
            { name: "Bulgarian Split Squats", sets: "3 sets", reps: "12-15 reps", description: "Rear foot elevated split squat. Great glute builder." },
            { name: "Jump Squats", sets: "3 sets", reps: "15 reps", description: "Explosive squat jumps. Power and glute development." }
        ],
        "Right Glute": [
            { name: "Single Leg Box Squats", sets: "3 sets", reps: "10-12 each", description: "Squat to box on one leg. Advanced glute work." },
            { name: "Bulgarian Split Squats", sets: "3 sets", reps: "12-15 reps", description: "Rear foot elevated split squat. Great glute builder." },
            { name: "Jump Squats", sets: "3 sets", reps: "15 reps", description: "Explosive squat jumps. Power and glute development." }
        ],
        "Left Hamstring": [
            { name: "Nordic Curls", sets: "4 sets", reps: "5-8 reps", description: "Full nordic curls. Elite hamstring builder." },
            { name: "Single Leg RDL", sets: "3 sets", reps: "12 each", description: "Romanian deadlift on one leg. Balance and hamstring work." },
            { name: "Glute-Ham Raises", sets: "3 sets", reps: "8-12 reps", description: "Advanced hamstring exercise. Incredible strength builder." }
        ],
        "Right Hamstring": [
            { name: "Nordic Curls", sets: "4 sets", reps: "5-8 reps", description: "Full nordic curls. Elite hamstring builder." },
            { name: "Single Leg RDL", sets: "3 sets", reps: "12 each", description: "Romanian deadlift on one leg. Balance and hamstring work." },
            { name: "Glute-Ham Raises", sets: "3 sets", reps: "8-12 reps", description: "Advanced hamstring exercise. Incredible strength builder." }
        ],
        "Left Calf": [
            { name: "Single Leg Calf Raises", sets: "4 sets", reps: "15-20 reps", description: "One leg calf raises. Much harder than double." },
            { name: "Jump Rope", sets: "4 sets", reps: "90 sec", description: "Continuous jump rope. Excellent calf endurance." },
            { name: "Box Jumps", sets: "3 sets", reps: "12-15 reps", description: "Jump onto platform. Explosive calf power." }
        ],
        "Right Calf": [
            { name: "Single Leg Calf Raises", sets: "4 sets", reps: "15-20 reps", description: "One leg calf raises. Much harder than double." },
            { name: "Jump Rope", sets: "4 sets", reps: "90 sec", description: "Continuous jump rope. Excellent calf endurance." },
            { name: "Box Jumps", sets: "3 sets", reps: "12-15 reps", description: "Jump onto platform. Explosive calf power." }
        ]
    },
    
    gym: {
        "Left Biceps": [
            { name: "Barbell Curl", sets: "3 sets", reps: "8-12 reps", description: "Stand with feet shoulder-width apart. Curl barbell up while keeping elbows stationary. Squeeze at the top." },
            { name: "Hammer Curls", sets: "3 sets", reps: "10-12 reps", description: "Hold dumbbells with palms facing each other. Curl up while maintaining neutral grip throughout." },
            { name: "Concentration Curls", sets: "3 sets", reps: "10-15 reps", description: "Sit on bench, rest elbow on inner thigh. Curl dumbbell up with full concentration on bicep contraction." },
            { name: "Cable Curls", sets: "3 sets", reps: "12-15 reps", description: "Use cable machine for constant tension. Keep elbows pinned to sides throughout movement." }
        ],
        "Right Biceps": [
            { name: "Barbell Curl", sets: "3 sets", reps: "8-12 reps", description: "Stand with feet shoulder-width apart. Curl barbell up while keeping elbows stationary. Squeeze at the top." },
            { name: "Hammer Curls", sets: "3 sets", reps: "10-12 reps", description: "Hold dumbbells with palms facing each other. Curl up while maintaining neutral grip throughout." },
            { name: "Concentration Curls", sets: "3 sets", reps: "10-15 reps", description: "Sit on bench, rest elbow on inner thigh. Curl dumbbell up with full concentration on bicep contraction." },
            { name: "Cable Curls", sets: "3 sets", reps: "12-15 reps", description: "Use cable machine for constant tension. Keep elbows pinned to sides throughout movement." }
        ],
        "Left Chest": [
            { name: "Barbell Bench Press", sets: "4 sets", reps: "6-10 reps", description: "Lie on bench, lower bar to chest with elbows at 45 degrees. Press up explosively." },
            { name: "Incline Dumbbell Press", sets: "3 sets", reps: "8-12 reps", description: "Set bench to 30-45 degrees. Press dumbbells up focusing on upper chest squeeze." },
            { name: "Cable Flyes", sets: "3 sets", reps: "12-15 reps", description: "Stand between cables, bring handles together in front of chest. Feel the stretch at bottom." },
            { name: "Pec Deck Machine", sets: "3 sets", reps: "12-15 reps", description: "Seated machine flye. Excellent chest isolation with controlled movement." }
        ],
        "Right Chest": [
            { name: "Barbell Bench Press", sets: "4 sets", reps: "6-10 reps", description: "Lie on bench, lower bar to chest with elbows at 45 degrees. Press up explosively." },
            { name: "Incline Dumbbell Press", sets: "3 sets", reps: "8-12 reps", description: "Set bench to 30-45 degrees. Press dumbbells up focusing on upper chest squeeze." },
            { name: "Cable Flyes", sets: "3 sets", reps: "12-15 reps", description: "Stand between cables, bring handles together in front of chest. Feel the stretch at bottom." },
            { name: "Pec Deck Machine", sets: "3 sets", reps: "12-15 reps", description: "Seated machine flye. Excellent chest isolation with controlled movement." }
        ],
        "Left Forearm": [
            { name: "Wrist Curls", sets: "3 sets", reps: "15-20 reps", description: "Rest forearms on bench, curl wrists up holding barbell or dumbbells." },
            { name: "Reverse Wrist Curls", sets: "3 sets", reps: "15-20 reps", description: "Same position but palms facing down. Curl wrists up to work extensors." },
            { name: "Farmer's Walk", sets: "3 sets", reps: "30-60 sec", description: "Hold heavy dumbbells at sides and walk. Improves grip strength significantly." },
            { name: "Dead Hangs", sets: "3 sets", reps: "30-60 sec", description: "Hang from pull-up bar. Great for grip endurance and forearm development." }
        ],
        "Right Forearm": [
            { name: "Wrist Curls", sets: "3 sets", reps: "15-20 reps", description: "Rest forearms on bench, curl wrists up holding barbell or dumbbells." },
            { name: "Reverse Wrist Curls", sets: "3 sets", reps: "15-20 reps", description: "Same position but palms facing down. Curl wrists up to work extensors." },
            { name: "Farmer's Walk", sets: "3 sets", reps: "30-60 sec", description: "Hold heavy dumbbells at sides and walk. Improves grip strength significantly." },
            { name: "Dead Hangs", sets: "3 sets", reps: "30-60 sec", description: "Hang from pull-up bar. Great for grip endurance and forearm development." }
        ],
        "Left Shoulder": [
            { name: "Overhead Press", sets: "4 sets", reps: "6-10 reps", description: "Press barbell or dumbbells overhead. Keep core tight and avoid arching lower back." },
            { name: "Lateral Raises", sets: "3 sets", reps: "12-15 reps", description: "Raise dumbbells to sides until arms parallel to ground. Control the descent." },
            { name: "Front Raises", sets: "3 sets", reps: "12-15 reps", description: "Raise dumbbells in front to shoulder height. Targets anterior deltoid." },
            { name: "Arnold Press", sets: "3 sets", reps: "10-12 reps", description: "Start with palms facing you, rotate to overhead press. Works all deltoid heads." }
        ],
        "Right Shoulder": [
            { name: "Overhead Press", sets: "4 sets", reps: "6-10 reps", description: "Press barbell or dumbbells overhead. Keep core tight and avoid arching lower back." },
            { name: "Lateral Raises", sets: "3 sets", reps: "12-15 reps", description: "Raise dumbbells to sides until arms parallel to ground. Control the descent." },
            { name: "Front Raises", sets: "3 sets", reps: "12-15 reps", description: "Raise dumbbells in front to shoulder height. Targets anterior deltoid." },
            { name: "Arnold Press", sets: "3 sets", reps: "10-12 reps", description: "Start with palms facing you, rotate to overhead press. Works all deltoid heads." }
        ],
        "Trapezius": [
            { name: "Barbell Shrugs", sets: "4 sets", reps: "10-15 reps", description: "Hold barbell, shrug shoulders straight up. Squeeze traps at the top." },
            { name: "Dumbbell Shrugs", sets: "3 sets", reps: "12-15 reps", description: "Hold dumbbells at sides, shrug up. Better range of motion than barbell." },
            { name: "Face Pulls", sets: "3 sets", reps: "15-20 reps", description: "Pull rope to face level. Great for rear delts and upper traps." },
            { name: "Upright Rows", sets: "3 sets", reps: "10-12 reps", description: "Pull barbell up along body to chin level. Keep elbows high." }
        ],
        "Left Lateral Deltoid": [
            { name: "Lateral Raises", sets: "4 sets", reps: "12-15 reps", description: "Raise dumbbells to sides. This is the primary side delt builder." },
            { name: "Cable Lateral Raises", sets: "3 sets", reps: "15-20 reps", description: "Use cable for constant tension throughout the movement." },
            { name: "Upright Rows", sets: "3 sets", reps: "10-12 reps", description: "Pull weight up to chin level with elbows high and wide." },
            { name: "Dumbbell Press", sets: "3 sets", reps: "8-12 reps", description: "Press dumbbells overhead. Significant lateral deltoid activation." }
        ],
        "Right Lateral Deltoid": [
            { name: "Lateral Raises", sets: "4 sets", reps: "12-15 reps", description: "Raise dumbbells to sides. This is the primary side delt builder." },
            { name: "Cable Lateral Raises", sets: "3 sets", reps: "15-20 reps", description: "Use cable for constant tension throughout the movement." },
            { name: "Upright Rows", sets: "3 sets", reps: "10-12 reps", description: "Pull weight up to chin level with elbows high and wide." },
            { name: "Dumbbell Press", sets: "3 sets", reps: "8-12 reps", description: "Press dumbbells overhead. Significant lateral deltoid activation." }
        ],
        "Abs": [
            { name: "Hanging Leg Raises", sets: "3 sets", reps: "10-15 reps", description: "Hang from bar, raise legs to 90 degrees. Control the descent." },
            { name: "Cable Crunches", sets: "3 sets", reps: "15-20 reps", description: "Kneel at cable machine, crunch down bringing elbows to knees." },
            { name: "Decline Sit-ups", sets: "3 sets", reps: "15-20 reps", description: "On decline bench, perform sit-ups. Can hold weight for progression." },
            { name: "Ab Wheel Rollouts", sets: "3 sets", reps: "10-12 reps", description: "Roll forward keeping core tight. One of the best ab exercises." },
            { name: "Machine Crunches", sets: "3 sets", reps: "15-20 reps", description: "Use ab crunch machine. Allows progressive overload with weight." }
        ],
        "Obliques": [
            { name: "Cable Woodchoppers", sets: "3 sets", reps: "12-15 each side", description: "Use cable in diagonal chopping motion. Great for rotational strength." },
            { name: "Dumbbell Side Bends", sets: "3 sets", reps: "15 each side", description: "Hold dumbbell, bend to side. Direct oblique work with resistance." },
            { name: "Russian Twists", sets: "3 sets", reps: "20-30 reps", description: "Sit with feet elevated, twist torso side to side holding weight plate." },
            { name: "Hanging Knee Raises (Twist)", sets: "3 sets", reps: "12 each side", description: "Hang from bar, bring knees up with a twist. Targets obliques heavily." }
        ],
        "Left Quadriceps": [
            { name: "Barbell Squats", sets: "4 sets", reps: "6-10 reps", description: "King of leg exercises. Squat deep with chest up and knees tracking over toes." },
            { name: "Leg Press", sets: "4 sets", reps: "10-15 reps", description: "Press weight up with feet shoulder-width apart. Go deep for full quad activation." },
            { name: "Leg Extensions", sets: "3 sets", reps: "12-15 reps", description: "Extend legs until straight. Great quad isolation exercise." },
            { name: "Bulgarian Split Squats", sets: "3 sets", reps: "10-12 reps", description: "Rear foot elevated, squat down on front leg. Excellent for quad development." },
            { name: "Hack Squats", sets: "3 sets", reps: "10-15 reps", description: "Use hack squat machine. Removes lower back stress while hitting quads hard." }
        ],
        "Right Quadriceps": [
            { name: "Barbell Squats", sets: "4 sets", reps: "6-10 reps", description: "King of leg exercises. Squat deep with chest up and knees tracking over toes." },
            { name: "Leg Press", sets: "4 sets", reps: "10-15 reps", description: "Press weight up with feet shoulder-width apart. Go deep for full quad activation." },
            { name: "Leg Extensions", sets: "3 sets", reps: "12-15 reps", description: "Extend legs until straight. Great quad isolation exercise." },
            { name: "Bulgarian Split Squats", sets: "3 sets", reps: "10-12 reps", description: "Rear foot elevated, squat down on front leg. Excellent for quad development." },
            { name: "Hack Squats", sets: "3 sets", reps: "10-15 reps", description: "Use hack squat machine. Removes lower back stress while hitting quads hard." }
        ],
        "Left Adductors": [
            { name: "Adductor Machine", sets: "3 sets", reps: "12-15 reps", description: "Squeeze legs together against resistance. Primary adductor exercise." },
            { name: "Cable Adduction", sets: "3 sets", reps: "15 each leg", description: "Attach cable to ankle, pull leg across body. Isolated adductor work." },
            { name: "Sumo Deadlifts", sets: "3 sets", reps: "8-12 reps", description: "Wide stance deadlift. Heavy adductor and inner thigh activation." },
            { name: "Dumbbell Sumo Squats", sets: "3 sets", reps: "12-15 reps", description: "Hold dumbbell between legs in wide stance squat. Great adductor builder." }
        ],
        "Right Adductors": [
            { name: "Adductor Machine", sets: "3 sets", reps: "12-15 reps", description: "Squeeze legs together against resistance. Primary adductor exercise." },
            { name: "Cable Adduction", sets: "3 sets", reps: "15 each leg", description: "Attach cable to ankle, pull leg across body. Isolated adductor work." },
            { name: "Sumo Deadlifts", sets: "3 sets", reps: "8-12 reps", description: "Wide stance deadlift. Heavy adductor and inner thigh activation." },
            { name: "Dumbbell Sumo Squats", sets: "3 sets", reps: "12-15 reps", description: "Hold dumbbell between legs in wide stance squat. Great adductor builder." }
        ],
        "Left Calves": [
            { name: "Standing Calf Raises", sets: "4 sets", reps: "15-20 reps", description: "Use calf raise machine with heavy weight. Full range of motion crucial." },
            { name: "Seated Calf Raises", sets: "3 sets", reps: "15-20 reps", description: "Targets soleus muscle. Important for complete calf development." },
            { name: "Leg Press Calf Raises", sets: "3 sets", reps: "20-25 reps", description: "Use leg press machine for calves. Allows very heavy loading." },
            { name: "Single Leg Calf Raises", sets: "3 sets", reps: "12-15 each", description: "One leg at a time on machine. Fixes imbalances and builds strength." }
        ],
        "Right Calves": [
            { name: "Standing Calf Raises", sets: "4 sets", reps: "15-20 reps", description: "Use calf raise machine with heavy weight. Full range of motion crucial." },
            { name: "Seated Calf Raises", sets: "3 sets", reps: "15-20 reps", description: "Targets soleus muscle. Important for complete calf development." },
            { name: "Leg Press Calf Raises", sets: "3 sets", reps: "20-25 reps", description: "Use leg press machine for calves. Allows very heavy loading." },
            { name: "Single Leg Calf Raises", sets: "3 sets", reps: "12-15 each", description: "One leg at a time on machine. Fixes imbalances and builds strength." }
        ],
        "Left Tibialis": [
            { name: "Tib Bar Raises", sets: "3 sets", reps: "12-15 reps", description: "Use tib bar for weighted tibialis training. Great for injury prevention." },
            { name: "Cable Dorsiflexion", sets: "3 sets", reps: "15-20 reps", description: "Attach cable to foot, pull toes toward shin. Controlled resistance." },
            { name: "Resistance Band Dorsiflexion", sets: "3 sets", reps: "15-20 reps", description: "Pull toes toward shin against band resistance." },
            { name: "Machine Dorsiflexion", sets: "3 sets", reps: "15-20 reps", description: "If available, use dorsiflexion machine for shin strengthening." }
        ],
        "Right Tibialis": [
            { name: "Tib Bar Raises", sets: "3 sets", reps: "12-15 reps", description: "Use tib bar for weighted tibialis training. Great for injury prevention." },
            { name: "Cable Dorsiflexion", sets: "3 sets", reps: "15-20 reps", description: "Attach cable to foot, pull toes toward shin. Controlled resistance." },
            { name: "Resistance Band Dorsiflexion", sets: "3 sets", reps: "15-20 reps", description: "Pull toes toward shin against band resistance." },
            { name: "Machine Dorsiflexion", sets: "3 sets", reps: "15-20 reps", description: "If available, use dorsiflexion machine for shin strengthening." }
        ],
        "Head": [
            { name: "Reading & Learning", sets: "Daily", reps: "30+ min", description: "📚 Read books, articles, and research papers to expand knowledge and cognitive abilities." },
            { name: "Problem Solving", sets: "Daily", reps: "15+ min", description: "🧩 Work on puzzles, math problems, or coding challenges to sharpen analytical thinking." },
            { name: "Meditation", sets: "Daily", reps: "10-20 min", description: "🧘 Practice mindfulness and meditation to improve focus, reduce stress, and enhance mental clarity." },
            { name: "Creative Thinking", sets: "3-4x/week", reps: "20+ min", description: "🎨 Engage in creative activities like writing, drawing, or brainstorming to boost innovation." },
            { name: "Physical Exercise", sets: "Daily", reps: "30+ min", description: "🏃 Regular cardio and strength training improve brain health, memory, and cognitive function." }
        ]
        ,
        "Upper Trapezius": [
            { name: "Barbell Shrugs", sets: "4 sets", reps: "10-12 reps", description: "Heavy barbell shrugs. King of trap exercises." },
            { name: "Dumbbell Shrugs", sets: "3 sets", reps: "12-15 reps", description: "DB shrugs with controlled movement. Great trap builder." },
            { name: "Cable Shrugs", sets: "3 sets", reps: "15 reps", description: "Constant tension cable shrugs. Excellent muscle activation." }
        ],
        "Left Trapezius": [
            { name: "Rack Pulls", sets: "3 sets", reps: "6-8 reps", description: "Heavy partial deadlifts. Massive trap activation." },
            { name: "Face Pulls", sets: "3 sets", reps: "15-20 reps", description: "Cable face pulls. Great for mid and upper traps." }
        ],
        "Right Trapezius": [
            { name: "Rack Pulls", sets: "3 sets", reps: "6-8 reps", description: "Heavy partial deadlifts. Massive trap activation." },
            { name: "Face Pulls", sets: "3 sets", reps: "15-20 reps", description: "Cable face pulls. Great for mid and upper traps." }
        ],
        "Left Rear Deltoid": [
            { name: "Cable Reverse Flys", sets: "3 sets", reps: "12-15 reps", description: "Cable crossover reverse fly. Excellent rear delt isolation." },
            { name: "Bent-Over Dumbbell Flys", sets: "3 sets", reps: "12-15 reps", description: "Bend 90 degrees, fly dumbbells. Classic rear delt move." },
            { name: "Face Pulls", sets: "3 sets", reps: "15-20 reps", description: "High cable pulls to face. Great for rear delts and health." }
        ],
        "Right Rear Deltoid": [
            { name: "Cable Reverse Flys", sets: "3 sets", reps: "12-15 reps", description: "Cable crossover reverse fly. Excellent rear delt isolation." },
            { name: "Bent-Over Dumbbell Flys", sets: "3 sets", reps: "12-15 reps", description: "Bend 90 degrees, fly dumbbells. Classic rear delt move." },
            { name: "Face Pulls", sets: "3 sets", reps: "15-20 reps", description: "High cable pulls to face. Great for rear delts and health." }
        ],
        "Left Triceps": [
            { name: "Close-Grip Bench Press", sets: "4 sets", reps: "8-10 reps", description: "Narrow grip barbell press. Compound tricep builder." },
            { name: "Overhead Dumbbell Extension", sets: "3 sets", reps: "10-12 reps", description: "DB overhead with two hands. Great long head activation." },
            { name: "Cable Pushdowns", sets: "3 sets", reps: "12-15 reps", description: "Rope or bar pushdowns. Constant tension for triceps." },
            { name: "Dips (Weighted)", sets: "3 sets", reps: "8-12 reps", description: "Add weight for progression. Ultimate tricep mass builder." }
        ],
        "Right Triceps": [
            { name: "Close-Grip Bench Press", sets: "4 sets", reps: "8-10 reps", description: "Narrow grip barbell press. Compound tricep builder." },
            { name: "Overhead Dumbbell Extension", sets: "3 sets", reps: "10-12 reps", description: "DB overhead with two hands. Great long head activation." },
            { name: "Cable Pushdowns", sets: "3 sets", reps: "12-15 reps", description: "Rope or bar pushdowns. Constant tension for triceps." },
            { name: "Dips (Weighted)", sets: "3 sets", reps: "8-12 reps", description: "Add weight for progression. Ultimate tricep mass builder." }
        ],
        "Left Lat": [
            { name: "Lat Pulldowns (Wide)", sets: "4 sets", reps: "10-12 reps", description: "Wide grip pulldowns. Classic lat width builder." },
            { name: "Barbell Rows", sets: "4 sets", reps: "8-10 reps", description: "Bent-over rows. Compound back and lat exercise." },
            { name: "Cable Rows", sets: "3 sets", reps: "12-15 reps", description: "Seated cable rows. Excellent lat and mid-back work." },
            { name: "Pull-ups (Weighted)", sets: "3 sets", reps: "6-10 reps", description: "Add weight to pull-ups. Advanced lat developer." }
        ],
        "Right Lat": [
            { name: "Lat Pulldowns (Wide)", sets: "4 sets", reps: "10-12 reps", description: "Wide grip pulldowns. Classic lat width builder." },
            { name: "Barbell Rows", sets: "4 sets", reps: "8-10 reps", description: "Bent-over rows. Compound back and lat exercise." },
            { name: "Cable Rows", sets: "3 sets", reps: "12-15 reps", description: "Seated cable rows. Excellent lat and mid-back work." },
            { name: "Pull-ups (Weighted)", sets: "3 sets", reps: "6-10 reps", description: "Add weight to pull-ups. Advanced lat developer." }
        ],
        "Left Upper Back": [
            { name: "T-Bar Rows", sets: "4 sets", reps: "8-12 reps", description: "T-bar or landmine rows. Excellent upper back thickness." },
            { name: "Dumbbell Rows", sets: "3 sets", reps: "10-12 reps", description: "Single arm DB rows. Great for back development." },
            { name: "Chest-Supported Rows", sets: "3 sets", reps: "12-15 reps", description: "Remove lower back from equation. Pure upper back work." }
        ],
        "Right Upper Back": [
            { name: "T-Bar Rows", sets: "4 sets", reps: "8-12 reps", description: "T-bar or landmine rows. Excellent upper back thickness." },
            { name: "Dumbbell Rows", sets: "3 sets", reps: "10-12 reps", description: "Single arm DB rows. Great for back development." },
            { name: "Chest-Supported Rows", sets: "3 sets", reps: "12-15 reps", description: "Remove lower back from equation. Pure upper back work." }
        ],
        "Left Erector Spinae": [
            { name: "Deadlifts", sets: "4 sets", reps: "5-8 reps", description: "Conventional deadlifts. King of lower back and posterior chain." },
            { name: "Good Mornings", sets: "3 sets", reps: "10-12 reps", description: "Barbell good mornings. Excellent erector strengthener." },
            { name: "Back Extensions (Weighted)", sets: "3 sets", reps: "12-15 reps", description: "Hold weight for progression. Great lower back work." }
        ],
        "Right Erector Spinae": [
            { name: "Deadlifts", sets: "4 sets", reps: "5-8 reps", description: "Conventional deadlifts. King of lower back and posterior chain." },
            { name: "Good Mornings", sets: "3 sets", reps: "10-12 reps", description: "Barbell good mornings. Excellent erector strengthener." },
            { name: "Back Extensions (Weighted)", sets: "3 sets", reps: "12-15 reps", description: "Hold weight for progression. Great lower back work." }
        ],
        "Left External Oblique": [
            { name: "Cable Woodchops", sets: "3 sets", reps: "12-15 each", description: "High to low cable rotations. Excellent functional oblique work." },
            { name: "Landmine Twists", sets: "3 sets", reps: "15-20 reps", description: "Russian twists with landmine bar. Heavy oblique training." }
        ],
        "Right External Oblique": [
            { name: "Cable Woodchops", sets: "3 sets", reps: "12-15 each", description: "High to low cable rotations. Excellent functional oblique work." },
            { name: "Landmine Twists", sets: "3 sets", reps: "15-20 reps", description: "Russian twists with landmine bar. Heavy oblique training." }
        ],
        "Left Glute": [
            { name: "Barbell Hip Thrusts", sets: "4 sets", reps: "10-12 reps", description: "Heavy hip thrusts. King of glute exercises for development." },
            { name: "Romanian Deadlifts", sets: "3 sets", reps: "10-12 reps", description: "RDLs with barbell. Excellent glute and hamstring builder." },
            { name: "Bulgarian Split Squats", sets: "3 sets", reps: "10-12 each", description: "Rear elevated with dumbbells. Great glute activation." },
            { name: "Cable Kickbacks", sets: "3 sets", reps: "15 each", description: "Ankle strap cable kickbacks. Excellent glute isolation." }
        ],
        "Right Glute": [
            { name: "Barbell Hip Thrusts", sets: "4 sets", reps: "10-12 reps", description: "Heavy hip thrusts. King of glute exercises for development." },
            { name: "Romanian Deadlifts", sets: "3 sets", reps: "10-12 reps", description: "RDLs with barbell. Excellent glute and hamstring builder." },
            { name: "Bulgarian Split Squats", sets: "3 sets", reps: "10-12 each", description: "Rear elevated with dumbbells. Great glute activation." },
            { name: "Cable Kickbacks", sets: "3 sets", reps: "15 each", description: "Ankle strap cable kickbacks. Excellent glute isolation." }
        ],
        "Left Hamstring": [
            { name: "Romanian Deadlifts", sets: "4 sets", reps: "8-10 reps", description: "RDLs with heavy weight. Premier hamstring exercise." },
            { name: "Lying Leg Curls", sets: "3 sets", reps: "12-15 reps", description: "Machine leg curls. Great hamstring isolation." },
            { name: "Nordic Curls (Assisted)", sets: "3 sets", reps: "6-10 reps", description: "Use machine or partner. Elite hamstring builder." },
            { name: "Good Mornings", sets: "3 sets", reps: "10-12 reps", description: "Barbell good mornings. Compound hamstring work." }
        ],
        "Right Hamstring": [
            { name: "Romanian Deadlifts", sets: "4 sets", reps: "8-10 reps", description: "RDLs with heavy weight. Premier hamstring exercise." },
            { name: "Lying Leg Curls", sets: "3 sets", reps: "12-15 reps", description: "Machine leg curls. Great hamstring isolation." },
            { name: "Nordic Curls (Assisted)", sets: "3 sets", reps: "6-10 reps", description: "Use machine or partner. Elite hamstring builder." },
            { name: "Good Mornings", sets: "3 sets", reps: "10-12 reps", description: "Barbell good mornings. Compound hamstring work." }
        ],
        "Left Calf": [
            { name: "Standing Calf Raises (Machine)", sets: "4 sets", reps: "12-15 reps", description: "Heavy machine calf raises. Best calf mass builder." },
            { name: "Seated Calf Raises (Machine)", sets: "3 sets", reps: "15-20 reps", description: "Targets soleus muscle. Different angle than standing." },
            { name: "Leg Press Calf Raises", sets: "3 sets", reps: "15-20 reps", description: "Calf raises on leg press. Heavy loading capability." }
        ],
        "Right Calf": [
            { name: "Standing Calf Raises (Machine)", sets: "4 sets", reps: "12-15 reps", description: "Heavy machine calf raises. Best calf mass builder." },
            { name: "Seated Calf Raises (Machine)", sets: "3 sets", reps: "15-20 reps", description: "Targets soleus muscle. Different angle than standing." },
            { name: "Leg Press Calf Raises", sets: "3 sets", reps: "15-20 reps", description: "Calf raises on leg press. Heavy loading capability." }
        ]
    }
};

// ============================
// MUSCLE ID MAPPING
// ============================

const muscleMapping = {
    // Upper Body
    'biceps1': 'Left Biceps',
    'biceps2': 'Right Biceps',
    'chest1': 'Left Chest',
    'chest2': 'Right Chest',
    'forearm1': 'Left Forearm',
    'forearm2': 'Right Forearm',
    'delts1': 'Left Shoulder',
    'delts2': 'Right Shoulder',
    'trapezoid': 'Trapezius',
    'trapezoidvector1': 'Trapezius',
    'trapezoidvector2': 'Trapezius',
    'lateral1': 'Left Lateral Deltoid',
    'lateral2': 'Right Lateral Deltoid',
    
    // Core
    'abs1': 'Abs',
    'abs2': 'Abs',
    'abs3': 'Abs',
    'abs4': 'Abs',
    'abs5': 'Abs',
    'abs6': 'Abs',
    'obliques': 'Obliques',
    
    // Lower Body
    'thighs1': 'Left Quadriceps',
    'thighs2': 'Right Quadriceps',
    'adductors1': 'Left Adductors',
    'adductors2': 'Right Adductors',
    'lowerleg1': 'Left Calves',
    'lowerleg2': 'Right Calves',
    'tibia1': 'Left Tibialis',
    'tibia2': 'Right Tibialis',
    
    // Head
    'head': 'Head'
};

// BACK BODY MUSCLE MAPPING
const backMuscleMapping = {
    // Back Head
    'back_head': 'Head',
    
    // Trapezius
    'upper_trapezius': 'Upper Trapezius',
    'middle_trapezius_left': 'Left Trapezius',
    'middle_trapezius_right': 'Right Trapezius',
    
    // Rear Deltoids
    'rear_deltoid_left': 'Left Rear Deltoid',
    'rear_deltoid_right': 'Right Rear Deltoid',
    
    // Triceps
    'triceps_left': 'Left Triceps',
    'triceps_right': 'Right Triceps',
    
    // Lats
    'lat_left': 'Left Lat',
    'lat_right': 'Right Lat',
    
    // Upper Back
    'upper_back_left': 'Left Upper Back',
    'upper_back_right': 'Right Upper Back',
    
    // Erector Spinae
    'erector_left': 'Left Erector Spinae',
    'erector_right': 'Right Erector Spinae',
    
    // External Obliques
    'external_oblique_left': 'Left External Oblique',
    'external_oblique_right': 'Right External Oblique',
    
    // Glutes
    'glute_left': 'Left Glute',
    'glute_right': 'Right Glute',
    'side_glute_left': 'Left Glute',
    'side_glute_right': 'Right Glute',
    
    // Hamstrings
    'inner_hamstring_left': 'Left Hamstring',
    'inner_hamstring_right': 'Right Hamstring',
    'outer_hamstring_left': 'Left Hamstring',
    'outer_hamstring_right': 'Right Hamstring',
    
    // Calves
    'calf_left': 'Left Calf',
    'calf_right': 'Right Calf',
    'lower_calf_left': 'Left Calf',
    'lower_calf_right': 'Right Calf'
};

// ============================
// MODE CONFIGURATION
// ============================

const modeConfig = {
    office: {
        name: 'Office Level',
        icon: '🏢',
        description: 'Bodyweight & minimal equipment'
    },
    street: {
        name: 'Street Level',
        icon: '🏃',
        description: 'Calisthenics & street workout'
    },
    gym: {
        name: 'Gym Level',
        icon: '💪',
        description: 'Full equipment & advanced training'
    }
};

// ============================
// CURRENT MODE MANAGEMENT
// ============================

let currentMode = localStorage.getItem('trainingMode') || null;
let currentView = 'front'; // 'front' or 'back'

// ============================
// DOM ELEMENTS
// ============================

const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const muscleDisplay = document.getElementById('muscleDisplay');
const exerciseModal = document.getElementById('exerciseModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const exercisesGrid = document.getElementById('exercisesGrid');
const bodySvg = document.getElementById('bodySvg');
const modeSelectionOverlay = document.getElementById('modeSelectionOverlay');
const modeIcon = document.getElementById('modeIcon');
const modeName = document.getElementById('modeName');
const viewToggleBtn = document.getElementById('viewToggleBtn');
const viewToggleText = document.getElementById('viewToggleText');

// ============================
// INITIALIZATION
// ============================

// Check if mode is selected, if not show selection modal
if (!currentMode) {
    setTimeout(() => {
        modeSelectionOverlay.classList.add('active');
    }, 300);
}

// ============================
// MODE SELECTION
// ============================

// Mode selection buttons
const modeSelectButtons = document.querySelectorAll('.mode-select-btn');
modeSelectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const selectedMode = btn.getAttribute('data-mode');
        setMode(selectedMode);
        modeSelectionOverlay.classList.remove('active');
    });
});

// Mode switcher buttons in menu
const modeSwitchButtons = document.querySelectorAll('.mode-btn');
modeSwitchButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const selectedMode = btn.getAttribute('data-mode');
        setMode(selectedMode);
        
        // Visual feedback
        modeSwitchButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// ============================
// SET MODE FUNCTION
// ============================

function setMode(mode) {
    currentMode = mode;
    localStorage.setItem('trainingMode', mode);
    
    // Update UI
    const config = modeConfig[mode];
    modeIcon.textContent = config.icon;
    modeName.textContent = config.name;
    
    // Update active state on mode switcher buttons
    modeSwitchButtons.forEach(btn => {
        if (btn.getAttribute('data-mode') === mode) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    console.log(`🎯 Mode changed to: ${config.name}`);
}

// Initialize mode display if mode exists
if (currentMode) {
    setMode(currentMode);
}

// ============================
// MENU TOGGLE
// ============================

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    sideMenu.classList.toggle('active');
});

// ============================
// VIEW TOGGLE (FRONT/BACK)
// ============================

viewToggleBtn.addEventListener('click', () => {
    if (currentView === 'front') {
        currentView = 'back';
        bodySvg.setAttribute('data', 'images/back_body.svg');
        viewToggleText.textContent = 'Show Front';
    } else {
        currentView = 'front';
        bodySvg.setAttribute('data', 'images/body.svg');
        viewToggleText.textContent = 'Show Back';
    }
    
    // Clear muscle display when switching views
    muscleDisplay.classList.remove('visible');
    
    // Re-setup SVG interactions after view change
    setTimeout(setupSVGInteractions, 100);
});

// ============================
// SHORTS TOGGLE (ON/OFF)
// ============================

const shortsToggleBtn = document.getElementById('shortsToggleBtn');
const shortsToggleText = document.getElementById('shortsToggleText');
let shortsVisible = true; // Shorts are ON by default

shortsToggleBtn.addEventListener('click', () => {
    // Wait a tiny bit to ensure SVG is fully loaded
    setTimeout(() => {
        const svgDoc = bodySvg.contentDocument;
        if (!svgDoc) {
            console.log('SVG not loaded yet');
            alert('Please wait for the body image to load before toggling shorts.');
            return;
        }
        toggleShorts(svgDoc);
    }, 50);
});

function toggleShorts(svgDoc) {
    // Toggle shorts visibility
    shortsVisible = !shortsVisible;
    
    // Find and toggle BOTH shorts elements (so it works when switching views)
    const frontShorts = svgDoc.getElementById('image0_5_41');
    const backShorts = svgDoc.getElementById('image0_5_4');
    
    if (frontShorts) {
        // Use multiple methods to ensure shorts hide properly AND don't block clicks
        frontShorts.style.visibility = shortsVisible ? 'visible' : 'hidden';
        frontShorts.style.opacity = shortsVisible ? '1' : '0';
        frontShorts.style.pointerEvents = shortsVisible ? 'auto' : 'none';
        frontShorts.setAttribute('pointer-events', shortsVisible ? 'auto' : 'none'); // Set as SVG attribute too
        // Also try setting the display attribute directly on the SVG element
        if (shortsVisible) {
            frontShorts.removeAttribute('display');
        } else {
            frontShorts.setAttribute('display', 'none');
        }
        console.log('Front shorts toggled:', shortsVisible ? 'visible' : 'hidden');
        console.log('Front shorts pointer-events:', frontShorts.style.pointerEvents);
    } else {
        console.log('Front shorts element not found');
    }
    
    if (backShorts) {
        backShorts.style.visibility = shortsVisible ? 'visible' : 'hidden';
        backShorts.style.opacity = shortsVisible ? '1' : '0';
        backShorts.style.pointerEvents = shortsVisible ? 'auto' : 'none';
        backShorts.setAttribute('pointer-events', shortsVisible ? 'auto' : 'none'); // Set as SVG attribute too
        if (shortsVisible) {
            backShorts.removeAttribute('display');
        } else {
            backShorts.setAttribute('display', 'none');
        }
        console.log('Back shorts toggled:', shortsVisible ? 'visible' : 'hidden');
        console.log('Back shorts pointer-events:', backShorts.style.pointerEvents);
    } else {
        console.log('Back shorts element not found');
    }
    
    // Update button text
    shortsToggleText.textContent = shortsVisible ? 'Shorts: On' : 'Shorts: Off';
}

// ============================
// CALORIE CALCULATOR
// ============================

const calorieCalcMenuItem = document.getElementById('calorieCalcMenuItem');
const calorieCalculatorOverlay = document.getElementById('calorieCalculatorOverlay');
const calcClose = document.getElementById('calcClose');
const calcForm = document.getElementById('calcForm');
const calcResults = document.getElementById('calcResults');

// Open calculator when menu item is clicked
calorieCalcMenuItem.addEventListener('click', () => {
    calorieCalculatorOverlay.classList.add('active');
    // Close side menu
    sideMenu.classList.remove('active');
    menuToggle.classList.remove('active');
});

// Close calculator
calcClose.addEventListener('click', () => {
    calorieCalculatorOverlay.classList.add('closing'); // Disable all pointer events immediately
    calorieCalculatorOverlay.classList.remove('active');
    setTimeout(() => {
        calorieCalculatorOverlay.classList.remove('closing');
    }, 300);
});

// Close calculator when clicking outside
calorieCalculatorOverlay.addEventListener('click', (e) => {
    if (e.target === calorieCalculatorOverlay) {
        calorieCalculatorOverlay.classList.add('closing'); // Disable all pointer events immediately
        calorieCalculatorOverlay.classList.remove('active');
        setTimeout(() => {
            calorieCalculatorOverlay.classList.remove('closing');
        }, 300);
    }
});

// Handle form submission
calcForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const sex = document.getElementById('calcSex').value;
    const age = parseInt(document.getElementById('calcAge').value);
    const height = parseInt(document.getElementById('calcHeight').value);
    const weight = parseFloat(document.getElementById('calcWeight').value);
    const activityLevel = parseFloat(document.getElementById('calcActivity').value);
    
    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr;
    if (sex === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    
    // Calculate TDEE (Total Daily Energy Expenditure)
    const tdee = bmr * activityLevel;
    
    // Add 15% surplus for muscle building
    const caloriesForMuscle = Math.round(tdee * 1.15);
    
    // Calculate macronutrients
    // Protein: 30% of calories (4 cal/g)
    const proteinCal = caloriesForMuscle * 0.30;
    const proteinGrams = Math.round(proteinCal / 4);
    
    // Carbs: 45% of calories (4 cal/g)
    const carbsCal = caloriesForMuscle * 0.45;
    const carbsGrams = Math.round(carbsCal / 4);
    
    // Fats: 25% of calories (9 cal/g)
    const fatsCal = caloriesForMuscle * 0.25;
    const fatsGrams = Math.round(fatsCal / 9);
    
    // Display results
    document.getElementById('resultCalories').textContent = caloriesForMuscle + ' kcal';
    
    document.getElementById('resultProteinG').textContent = proteinGrams + 'g';
    document.getElementById('resultProteinCal').textContent = Math.round(proteinCal) + ' cal';
    
    document.getElementById('resultCarbsG').textContent = carbsGrams + 'g';
    document.getElementById('resultCarbsCal').textContent = Math.round(carbsCal) + ' cal';
    
    document.getElementById('resultFatsG').textContent = fatsGrams + 'g';
    document.getElementById('resultFatsCal').textContent = Math.round(fatsCal) + ' cal';
    
    // Show results section
    calcResults.style.display = 'block';
    
    // Scroll to results
    setTimeout(() => {
        calcResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
});

// ============================
// EXERCISE TIMER (COUNTDOWN)
// ============================

const timerDisplay = document.getElementById('timerDisplay');
const timerStart = document.getElementById('timerStart');
const timerReset = document.getElementById('timerReset');
const presetBtns = document.querySelectorAll('.preset-btn');

let timerInterval = null;
let timerSeconds = 45;
let timerRunning = false;

// Preset button handlers
presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active from all
        presetBtns.forEach(b => b.classList.remove('active'));
        // Add active to clicked
        btn.classList.add('active');
        
        // Set timer value
        timerSeconds = parseInt(btn.dataset.seconds);
        timerDisplay.textContent = timerSeconds;
        
        // Stop timer if running
        if (timerRunning) {
            stopTimer();
        }
    });
});

// Start/Pause button
timerStart.addEventListener('click', () => {
    if (timerRunning) {
        // Pause
        stopTimer();
    } else {
        // Start
        startTimer();
    }
});

// Reset button
timerReset.addEventListener('click', () => {
    stopTimer();
    const activePreset = document.querySelector('.preset-btn.active');
    timerSeconds = activePreset ? parseInt(activePreset.dataset.seconds) : 45;
    timerDisplay.textContent = timerSeconds;
});

function startTimer() {
    timerRunning = true;
    timerStart.classList.add('running');
    timerStart.querySelector('span:last-child').textContent = 'Pause';
    timerStart.querySelector('.timer-btn-icon').textContent = '⏸';
    timerDisplay.classList.add('running');
    
    timerInterval = setInterval(() => {
        timerSeconds--;
        timerDisplay.textContent = timerSeconds;
        
        if (timerSeconds <= 0) {
            stopTimer();
            timerDisplay.textContent = '0';
            // Optional: Play a sound or show notification
            alert('Time\'s up! 💪');
        }
    }, 1000);
}

function stopTimer() {
    timerRunning = false;
    clearInterval(timerInterval);
    timerStart.classList.remove('running');
    timerStart.querySelector('span:last-child').textContent = 'Start';
    timerStart.querySelector('.timer-btn-icon').textContent = '▶';
    timerDisplay.classList.remove('running');
}

// ============================
// WARM-UP WARNING (GYM MODE)
// ============================

const warmupToast = document.getElementById('warmupToast');
const warmupToastClose = document.getElementById('warmupToastClose');

function showWarmupWarning() {
    // Check if already shown this session
    if (sessionStorage.getItem('warmupWarningShown')) {
        return;
    }
    
    // Show toast
    setTimeout(() => {
        warmupToast.classList.add('show');
    }, 500);
    
    // Auto-hide after 8 seconds
    setTimeout(() => {
        warmupToast.classList.remove('show');
    }, 8500);
    
    // Mark as shown
    sessionStorage.setItem('warmupWarningShown', 'true');
}

// Close button
warmupToastClose.addEventListener('click', () => {
    warmupToast.classList.remove('show');
});

// Check for Gym mode switch in existing mode buttons
const modeBtnsSwitcher = document.querySelectorAll('.mode-btn');
modeBtnsSwitcher.forEach(btn => {
    btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        if (mode === 'gym') {
            showWarmupWarning();
        }
    });
});

// Also check mode selection modal buttons
const modeSelectBtns = document.querySelectorAll('.mode-select-btn');
modeSelectBtns.forEach(btn => {
    const originalClick = btn.onclick;
    btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        if (mode === 'gym') {
            setTimeout(() => {
                showWarmupWarning();
            }, 600);
        }
    });
});

// ============================
// MOTIVATIONAL QUOTES
// ============================

const motivationalQuote = document.getElementById('motivationalQuote');
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const quotesToggle = document.getElementById('quotesToggle');

const fitnessQuotes = [
    { text: "The only bad workout is the one that didn't happen.", author: "Unknown" },
    { text: "Your body can stand almost anything. It's your mind you have to convince.", author: "Unknown" },
    { text: "Strength doesn't come from what you can do. It comes from overcoming what you thought you couldn't.", author: "Rikki Rogers" },
    { text: "The pain you feel today will be the strength you feel tomorrow.", author: "Arnold Schwarzenegger" },
    { text: "Success isn't always about greatness. It's about consistency.", author: "Dwayne Johnson" },
    { text: "Train like a beast, look like a beauty.", author: "Unknown" },
    { text: "The only way to define your limits is by going beyond them.", author: "Arthur C. Clarke" },
    { text: "Sweat is just fat crying.", author: "Unknown" },
    { text: "Don't wish for it, work for it.", author: "Unknown" },
    { text: "Push yourself because no one else is going to do it for you.", author: "Unknown" },
    { text: "Great things never come from comfort zones.", author: "Unknown" },
    { text: "The body achieves what the mind believes.", author: "Napoleon Hill" },
    { text: "If it doesn't challenge you, it doesn't change you.", author: "Fred DeVito" },
    { text: "Progress, not perfection.", author: "Unknown" },
    { text: "Believe in yourself and all that you are.", author: "Christian D. Larson" }
];

let quotesEnabled = false;
let quoteInterval = null;
let shownQuotes = [];
let currentQuoteIndex = -1;

// Load quote preference from localStorage
const savedQuotePreference = localStorage.getItem('quotesEnabled');
if (savedQuotePreference === 'true') {
    quotesToggle.checked = true;
    quotesEnabled = true;
    startQuoteRotation();
}

// Toggle handler
quotesToggle.addEventListener('change', (e) => {
    quotesEnabled = e.target.checked;
    localStorage.setItem('quotesEnabled', quotesEnabled);
    
    if (quotesEnabled) {
        startQuoteRotation();
    } else {
        stopQuoteRotation();
    }
});

function startQuoteRotation() {
    showRandomQuote();
    quoteInterval = setInterval(() => {
        hideQuote();
        setTimeout(() => {
            showRandomQuote();
        }, 1000); // 1 second gap between quotes
    }, 12000); // Show each quote for 12 seconds (1s fade in + 10s visible + 1s fade out)
}

function stopQuoteRotation() {
    clearInterval(quoteInterval);
    hideQuote();
    shownQuotes = [];
}

function showRandomQuote() {
    // If all quotes shown, reset
    if (shownQuotes.length === fitnessQuotes.length) {
        shownQuotes = [];
    }
    
    // Get available quotes
    const availableQuotes = fitnessQuotes.filter((_, index) => !shownQuotes.includes(index));
    
    // Pick random quote
    const randomIndex = Math.floor(Math.random() * availableQuotes.length);
    const selectedQuote = availableQuotes[randomIndex];
    
    // Find original index
    currentQuoteIndex = fitnessQuotes.indexOf(selectedQuote);
    shownQuotes.push(currentQuoteIndex);
    
    // Display quote
    quoteText.textContent = selectedQuote.text;
    quoteAuthor.textContent = selectedQuote.author;
    
    // Show with delay
    setTimeout(() => {
        motivationalQuote.classList.add('visible');
    }, 100);
    
    // Hide after 10 seconds
    setTimeout(() => {
        hideQuote();
    }, 10000);
}

function hideQuote() {
    motivationalQuote.classList.remove('visible');
}

// ============================
// TRAINING PERSPECTIVES (FEMALE CONSIDERATIONS)
// ============================

const perspectiveToggle = document.getElementById('perspectiveToggle');
const trainingInfoMenuItem = document.getElementById('trainingInfoMenuItem');
const trainingInfoOverlay = document.getElementById('trainingInfoOverlay');
const infoClose = document.getElementById('infoClose');

let femalePerspectiveEnabled = false;

// Load perspective preference from localStorage
const savedPerspective = localStorage.getItem('femalePerspective');
if (savedPerspective === 'true') {
    perspectiveToggle.checked = true;
    femalePerspectiveEnabled = true;
}

// Toggle handler
perspectiveToggle.addEventListener('change', (e) => {
    femalePerspectiveEnabled = e.target.checked;
    localStorage.setItem('femalePerspective', femalePerspectiveEnabled);
    
    // If a modal is currently open, refresh it
    if (exerciseModal.classList.contains('active')) {
        const currentMuscleName = document.getElementById('modalTitle').textContent.replace(' Exercises', '');
        showExercises(currentMuscleName);
    }
});

// Open training info modal
trainingInfoMenuItem.addEventListener('click', () => {
    trainingInfoOverlay.classList.add('active');
    // Close side menu
    sideMenu.classList.remove('active');
    menuToggle.classList.remove('active');
});

// Close training info modal
infoClose.addEventListener('click', () => {
    trainingInfoOverlay.classList.add('closing'); // Disable all pointer events immediately
    trainingInfoOverlay.classList.remove('active');
    setTimeout(() => {
        trainingInfoOverlay.classList.remove('closing');
    }, 300);
});

// Close when clicking outside
trainingInfoOverlay.addEventListener('click', (e) => {
    if (e.target === trainingInfoOverlay) {
        trainingInfoOverlay.classList.add('closing'); // Disable all pointer events immediately
        trainingInfoOverlay.classList.remove('active');
        setTimeout(() => {
            trainingInfoOverlay.classList.remove('closing');
        }, 300);
    }
});

// Female-specific exercise modifications
// This adds additional context and safety notes to exercises when female perspective is enabled
const femaleExerciseModifications = {
    // Lower Body (emphasis on hip-dominant movements)
    "Left Quadriceps": {
        notes: "👩 Focus on controlled knee alignment to prevent valgus collapse. Keep knees tracking over toes.",
        emphasis: "Lower body exercises are excellent for female physiology - natural strength advantage here!"
    },
    "Right Quadriceps": {
        notes: "👩 Focus on controlled knee alignment to prevent valgus collapse. Keep knees tracking over toes.",
        emphasis: "Lower body exercises are excellent for female physiology - natural strength advantage here!"
    },
    "Left Glutes": {
        notes: "👩 Glutes are a natural strength area! Emphasize hip extension and posterior pelvic tilt.",
        emphasis: "Excellent for female athletes - focus on hip-dominant patterns for maximum effectiveness."
    },
    "Right Glutes": {
        notes: "👩 Glutes are a natural strength area! Emphasize hip extension and posterior pelvic tilt.",
        emphasis: "Excellent for female athletes - focus on hip-dominant patterns for maximum effectiveness."
    },
    "Left Hamstrings": {
        notes: "👩 Critical for ACL protection (4-6x higher injury risk). Prioritize hamstring strength.",
        emphasis: "Essential for knee safety - hamstring strength reduces injury risk significantly."
    },
    "Right Hamstrings": {
        notes: "👩 Critical for ACL protection (4-6x higher injury risk). Prioritize hamstring strength.",
        emphasis: "Essential for knee safety - hamstring strength reduces injury risk significantly."
    },
    
    // Core (pelvic floor awareness)
    "Abs": {
        notes: "👩 Be mindful of pelvic floor engagement. Avoid bearing down during exercises.",
        emphasis: "Focus on core stability over maximum load - essential for spinal and pelvic health."
    },
    
    // Upper Body (focus on stability)
    "Left Chest": {
        notes: "👩 Focus on controlled movements. Ensure shoulder stability throughout the range of motion.",
        emphasis: "Build gradually - upper body strength develops effectively with consistent training."
    },
    "Right Chest": {
        notes: "👩 Focus on controlled movements. Ensure shoulder stability throughout the range of motion.",
        emphasis: "Build gradually - upper body strength develops effectively with consistent training."
    },
    "Left Shoulder": {
        notes: "👩 Prioritize rotator cuff activation. Greater joint laxity requires focus on stability.",
        emphasis: "Shoulder stability is key - strengthen rotator cuff to prevent impingement."
    },
    "Right Shoulder": {
        notes: "👩 Prioritize rotator cuff activation. Greater joint laxity requires focus on stability.",
        emphasis: "Shoulder stability is key - strengthen rotator cuff to prevent impingement."
    },
    
    // Back (posture emphasis)
    "Upper Back": {
        notes: "👩 Excellent for posture correction. Focus on scapular retraction and thoracic extension.",
        emphasis: "Upper back strength improves posture and reduces shoulder strain."
    },
    "Lower Back": {
        notes: "👩 Maintain neutral spine. Be especially cautious during menstrual cycle when ligament laxity increases.",
        emphasis: "Core stability protects lower back - engage deep abdominals before lifting."
    }
};

// ============================
// SVG LOADED HANDLER
// ============================

function setupSVGInteractions() {
    const svgDoc = bodySvg.contentDocument;
    if (!svgDoc) return;
    
    // Make sure shorts don't block muscle clicks and respect toggle state
    const frontShorts = svgDoc.getElementById('image0_5_41');
    const backShorts = svgDoc.getElementById('image0_5_4');
    if (frontShorts) {
        frontShorts.style.pointerEvents = 'none';
        frontShorts.setAttribute('pointer-events', 'none');
        frontShorts.style.visibility = shortsVisible ? 'visible' : 'hidden';
        frontShorts.style.opacity = shortsVisible ? '1' : '0';
        if (!shortsVisible) frontShorts.setAttribute('display', 'none');
    }
    if (backShorts) {
        backShorts.style.pointerEvents = 'none';
        backShorts.setAttribute('pointer-events', 'none');
        backShorts.style.visibility = shortsVisible ? 'visible' : 'hidden';
        backShorts.style.opacity = shortsVisible ? '1' : '0';
        if (!shortsVisible) backShorts.setAttribute('display', 'none');
    }
    
    // Make SVG background transparent
    const svgElement = svgDoc.querySelector('svg');
    if (svgElement) {
        svgElement.style.background = 'transparent';
        
        // Remove or hide white background rectangles
        const rects = svgDoc.querySelectorAll('rect');
        rects.forEach(rect => {
            const fill = rect.getAttribute('fill') || rect.style.fill;
            if (fill === '#FFFFFF' || fill === '#FFF' || fill === 'white' || 
                fill === '#ffffff' || fill === '#fff' || !fill) {
                rect.style.fill = 'transparent';
                rect.style.opacity = '0';
            }
        });
        
        // Also check for any elements with white fill
        const allElements = svgDoc.querySelectorAll('*');
        allElements.forEach(element => {
            const fill = element.getAttribute('fill');
            if (fill === '#FFFFFF' || fill === '#FFF' || fill === 'white' || 
                fill === '#ffffff' || fill === '#fff') {
                const mapping = currentView === 'front' ? muscleMapping : backMuscleMapping;
                if (!element.id || !mapping[element.id]) {
                    element.style.fill = 'transparent';
                    element.style.opacity = '0';
                }
            }
        });
    }
    
    // Select the appropriate muscle mapping based on current view
    const mapping = currentView === 'front' ? muscleMapping : backMuscleMapping;
    
    // Get all muscle elements by their IDs from the mapping
    Object.keys(mapping).forEach(muscleId => {
        const muscleElement = svgDoc.getElementById(muscleId);
        
        if (muscleElement) {
            const muscleName = mapping[muscleId];
            
            // Set default styling
            muscleElement.style.fill = '#94A3B8';
            muscleElement.style.opacity = '0.85';
            muscleElement.style.cursor = 'pointer';
            muscleElement.style.transition = 'all 0.3s ease';
            
            // Hover effect
            muscleElement.addEventListener('mouseenter', () => {
                muscleElement.style.fill = '#ef4444';
                muscleElement.style.opacity = '1';
                muscleElement.style.filter = 'drop-shadow(0 0 8px #ef4444)';
                muscleDisplay.textContent = muscleName;
                muscleDisplay.classList.add('visible');
            });
            
            muscleElement.addEventListener('mouseleave', () => {
                muscleElement.style.fill = '#94A3B8';
                muscleElement.style.opacity = '0.85';
                muscleElement.style.filter = 'none';
                muscleDisplay.classList.remove('visible');
            });
            
            // Click to show exercises
            muscleElement.addEventListener('click', () => {
                showExercises(muscleName);
            });
        }
    });
    
    // Reset all muscle highlights when mouse leaves SVG container
    const svgContainer = document.querySelector('.svg-container');
    if (svgContainer) {
        svgContainer.addEventListener('mouseleave', () => {
            // Only hide the display if no muscle is active
            const svgDoc = bodySvg.contentDocument;
            if (svgDoc) {
                const activeMuscle = svgDoc.querySelector('.muscle.active');
                if (!activeMuscle) {
                    muscleDisplay.classList.remove('visible');
                }
            }
        });
    }
}

bodySvg.addEventListener('load', setupSVGInteractions);

// ============================
// SHOW EXERCISES MODAL
// ============================

function showExercises(muscleName) {
    // Check if mode is selected
    if (!currentMode) {
        modeSelectionOverlay.classList.add('active');
        return;
    }
    
    const exercises = exerciseDatabase[currentMode][muscleName];
    
    if (!exercises) {
        console.error('No exercises found for:', muscleName, 'in mode:', currentMode);
        return;
    }
    
    // Clear previous content
    exercisesGrid.innerHTML = '';
    const config = modeConfig[currentMode];
    modalTitle.textContent = `${muscleName} - ${config.name}`;
    
    // Get modal content element
    const modalContent = document.querySelector('.modal-content');
    const exerciseTimer = document.getElementById('exerciseTimer');
    
    // Special styling for Head
    if (muscleName === 'Head') {
        modalContent.classList.add('head-modal');
        
        // Hide timer for Head (mental exercises don't need physical timer)
        if (exerciseTimer) {
            exerciseTimer.style.display = 'none';
        }
        
        // Add special message for head
        const headMessage = document.createElement('p');
        headMessage.style.textAlign = 'center';
        headMessage.style.fontSize = '20px'; // Increased from 18px
        headMessage.style.color = '#a855f7';
        headMessage.style.marginBottom = '24px';
        headMessage.style.fontWeight = '600';
        headMessage.innerHTML = '<span style="font-size: 36px;">🧠</span> You can only upgrade the head with knowledge'; // Larger brain emoji
        exercisesGrid.appendChild(headMessage);
    } else {
        modalContent.classList.remove('head-modal');
        
        // Show timer for physical exercises
        if (exerciseTimer) {
            exerciseTimer.style.display = 'block';
        }
    }
    
    // Add female perspective banner if enabled
    if (femalePerspectiveEnabled && femaleExerciseModifications[muscleName]) {
        const femaleBanner = document.createElement('div');
        femaleBanner.className = 'female-perspective-banner';
        femaleBanner.style.cssText = `
            background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(88, 28, 135, 0.15));
            border: 2px solid rgba(168, 85, 247, 0.4);
            border-radius: 14px;
            padding: 20px;
            margin-bottom: 24px;
        `;
        
        const modification = femaleExerciseModifications[muscleName];
        femaleBanner.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                <span style="font-size: 28px;">🎓</span>
                <h4 style="font-size: 18px; font-weight: 700; color: #a855f7; margin: 0;">Female Training Perspective</h4>
            </div>
            <div style="background: rgba(0, 0, 0, 0.3); border-left: 3px solid #a855f7; border-radius: 8px; padding: 16px; margin-bottom: 12px;">
                <p style="font-size: 14px; color: rgba(255, 255, 255, 0.9); margin: 0; line-height: 1.6;">${modification.notes}</p>
            </div>
            <p style="font-size: 14px; color: rgba(255, 255, 255, 0.85); margin: 0; line-height: 1.6; font-style: italic;">
                💡 ${modification.emphasis}
            </p>
        `;
        
        exercisesGrid.appendChild(femaleBanner);
    }
    
    // Create exercise cards
    exercises.forEach(exercise => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        
        card.innerHTML = `
            <h3>${exercise.name}</h3>
            <div class="exercise-meta">
                <span>${exercise.sets}</span>
                <span>${exercise.reps}</span>
            </div>
            <p>${exercise.description}</p>
            <a href="https://youtube.com/playlist?list=PLp4G6oBUcv8yGQifkb4p_ZOoACPnYslx9&si=XkXgfkzZ7ljltxG9" target="_blank" class="exercise-video-link">
                <span class="video-icon">▶️</span>
                <span>Watch proper form</span>
            </a>
        `;
        
        exercisesGrid.appendChild(card);
    });
    
    // Show modal
    exerciseModal.classList.add('active');
}

// ============================
// CLOSE MODAL
// ============================

// Function to reset muscle highlighting in SVG
function resetMuscleHighlighting() {
    const svgDoc = bodySvg.contentDocument;
    if (!svgDoc) return;
    
    const muscles = svgDoc.querySelectorAll('[id*="Biceps"], [id*="Triceps"], [id*="Chest"], [id*="Shoulder"], [id*="Forearm"], [id*="Abs"], [id*="Obliques"], [id*="Quadriceps"], [id*="Hamstrings"], [id*="Calves"], [id*="Glutes"], [id*="Upper_Back"], [id*="Lower_Back"], [id*="Head"], [id*="Traps"], [id*="Lats"]');
    
    muscles.forEach(muscle => {
        muscle.style.fill = '#94A3B8';
        muscle.style.filter = '';
    });
}

modalClose.addEventListener('click', () => {
    exerciseModal.classList.add('closing'); // Disable all pointer events immediately
    exerciseModal.classList.remove('active');
    resetMuscleHighlighting();
    // Remove closing class after animation completes
    setTimeout(() => {
        exerciseModal.classList.remove('closing');
    }, 300);
});

// Close modal when clicking outside
exerciseModal.addEventListener('click', (e) => {
    if (e.target === exerciseModal) {
        exerciseModal.classList.add('closing'); // Disable all pointer events immediately
        exerciseModal.classList.remove('active');
        resetMuscleHighlighting();
        setTimeout(() => {
            exerciseModal.classList.remove('closing');
        }, 300);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (exerciseModal.classList.contains('active')) {
            exerciseModal.classList.add('closing'); 
            exerciseModal.classList.remove('active');
            resetMuscleHighlighting();
            setTimeout(() => {
                exerciseModal.classList.remove('closing');
            }, 300);
        }
    }
});


console.log('🏋️ Muscle Training Atlas Loaded!');
console.log('💪 Click any muscle to see exercises');
console.log('🎯 Training Mode:', currentMode || 'Not selected');
console.log('📊 Total muscle groups:', Object.keys(muscleMapping).length);
console.log('🔄 Total exercises:', 
    Object.keys(exerciseDatabase.office).length + 
    Object.keys(exerciseDatabase.street).length + 
    Object.keys(exerciseDatabase.gym).length
);

// ========================================
// AI PUSH-UP TRACKER (BETA)
// ========================================

const startCameraBtn = document.getElementById('startCameraBtn');
const repsCount = document.getElementById('repsCount');
const trackerStatus = document.getElementById('trackerStatus');
const pushupVideo = document.getElementById('pushupVideo');
const pushupCanvas = document.getElementById('pushupCanvas');

let isTracking = false;
let currentReps = 0;
let pushupStage = "up";
let camera = null;
let pose = null;

function calculateAngle(a, b, c) {
    const ab = {
        x: a.x - b.x,
        y: a.y - b.y
    };

    const cb = {
        x: c.x - b.x,
        y: c.y - b.y
    };

    const dot = ab.x * cb.x + ab.y * cb.y;
    const magAB = Math.sqrt(ab.x * ab.x + ab.y * ab.y);
    const magCB = Math.sqrt(cb.x * cb.x + cb.y * cb.y);

    let cosine = dot / (magAB * magCB);
    cosine = Math.max(-1, Math.min(1, cosine));

    const angle = Math.acos(cosine);
    return angle * (180 / Math.PI);
}

function onPoseResults(results) {
    const canvasCtx = pushupCanvas.getContext('2d');

    pushupCanvas.width = pushupVideo.videoWidth || 640;
    pushupCanvas.height = pushupVideo.videoHeight || 480;

    canvasCtx.save();
    canvasCtx.clearRect(0, 0, pushupCanvas.width, pushupCanvas.height);
    canvasCtx.drawImage(results.image, 0, 0, pushupCanvas.width, pushupCanvas.height);

    if (results.poseLandmarks) {
        drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, {
            color: '#ef4444',
            lineWidth: 3
        });

        drawLandmarks(canvasCtx, results.poseLandmarks, {
            color: '#ffffff',
            lineWidth: 2,
            radius: 3
        });

        const landmarks = results.poseLandmarks;

        // Right arm landmarks
                const right = {
        shoulder: landmarks[12],
        elbow: landmarks[14],
        wrist: landmarks[16]
        };

        const left = {
        shoulder: landmarks[11],
        elbow: landmarks[13],
        wrist: landmarks[15]
        };

        function avgVisibility(arm) {
        return (arm.shoulder.visibility + arm.elbow.visibility + arm.wrist.visibility) / 3;
        }

        const arm = avgVisibility(left) > avgVisibility(right) ? left : right;

        const visibilityGood =
        arm.shoulder.visibility > 0.35 &&
        arm.elbow.visibility > 0.35 &&
        arm.wrist.visibility > 0.35;

        if (!visibilityGood) {
        trackerStatus.textContent = "Show your upper body from the side";
        canvasCtx.restore();
        return;
        }

const elbowAngle = calculateAngle(arm.shoulder, arm.elbow, arm.wrist);

// Extra rule: body must be visible, not only the arm
const bodyVisible =
  landmarks[11].visibility > 0.35 &&
  landmarks[12].visibility > 0.35 &&
  landmarks[23].visibility > 0.25 &&
  landmarks[24].visibility > 0.25;

if (!bodyVisible) {
  trackerStatus.textContent = "Show full upper body";
  canvasCtx.restore();
  return;
}

const now = Date.now();

if (!window.lastRepTime) window.lastRepTime = 0;
if (!window.downConfirmed) window.downConfirmed = false;

// User must clearly go down first
if (elbowAngle < 95 && pushupStage === "up") {
  pushupStage = "down";
  window.downConfirmed = true;
  trackerStatus.textContent = "Down position";
}

// Count only after confirmed down + enough time passed
if (
  elbowAngle > 150 &&
  pushupStage === "down" &&
  window.downConfirmed &&
  now - window.lastRepTime > 1200
) {
  currentReps++;
  repsCount.textContent = currentReps;
  trackerStatus.textContent = "Good rep!";
  pushupStage = "up";
  window.downConfirmed = false;
  window.lastRepTime = now;
}
    } else {
        trackerStatus.textContent = "No body detected";
    }

    canvasCtx.restore();
}

async function startPushupTracker() {
    pose = new Pose({
        locateFile: (file) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
        }
    });

    pose.setOptions({
        modelComplexity: 0,
        smoothLandmarks: true,
        enableSegmentation: false,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
    });

    pose.onResults(onPoseResults);

    camera = new Camera(pushupVideo, {
        onFrame: async () => {
            await pose.send({ image: pushupVideo });
        },
        width: 640,
        height: 480
    });

    await camera.start();

    isTracking = true;
    trackerStatus.textContent = "Tracking started";
    startCameraBtn.innerHTML = '<span class="btn-icon">⏸️</span><span>Stop Camera</span>';
}

function stopPushupTracker() {
    if (camera) {
        camera.stop();
        camera = null;
    }

    if (pushupVideo.srcObject) {
        pushupVideo.srcObject.getTracks().forEach(track => track.stop());
        pushupVideo.srcObject = null;
    }

    isTracking = false;
    pushupStage = "up";
    currentReps = 0;
    repsCount.textContent = "0";
    trackerStatus.textContent = "Stopped";
    startCameraBtn.innerHTML = '<span class="btn-icon">📷</span><span>Start Camera</span>';
}

if (startCameraBtn && repsCount && trackerStatus && pushupVideo && pushupCanvas) {
    startCameraBtn.addEventListener('click', async () => {
        if (!isTracking) {
            try {
                await startPushupTracker();
            } catch (error) {
                console.error("Pose tracker error:", error);
                trackerStatus.textContent = "Camera or tracking error";
            }
        } else {
            stopPushupTracker();
        }
    });
}

// ============================
// EXERCISE DATABASE
// ============================

const exerciseDatabase = {
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
        { name: "Push-ups", sets: "3 sets", reps: "15-20 reps", description: "Keep body straight, lower chest to ground. Push up with explosive power." }
    ],
    "Right Chest": [
        { name: "Barbell Bench Press", sets: "4 sets", reps: "6-10 reps", description: "Lie on bench, lower bar to chest with elbows at 45 degrees. Press up explosively." },
        { name: "Incline Dumbbell Press", sets: "3 sets", reps: "8-12 reps", description: "Set bench to 30-45 degrees. Press dumbbells up focusing on upper chest squeeze." },
        { name: "Cable Flyes", sets: "3 sets", reps: "12-15 reps", description: "Stand between cables, bring handles together in front of chest. Feel the stretch at bottom." },
        { name: "Push-ups", sets: "3 sets", reps: "15-20 reps", description: "Keep body straight, lower chest to ground. Push up with explosive power." }
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
        { name: "Planks", sets: "3 sets", reps: "60 sec", description: "Hold plank position with straight body. Engage core throughout." },
        { name: "Ab Wheel Rollouts", sets: "3 sets", reps: "10-12 reps", description: "Roll forward keeping core tight. One of the best ab exercises." },
        { name: "Russian Twists", sets: "3 sets", reps: "20 reps", description: "Sit with feet elevated, twist torso side to side holding weight." }
    ],
    "Obliques": [
        { name: "Russian Twists", sets: "3 sets", reps: "20-30 reps", description: "Sit with feet up, twist side to side. Targets obliques effectively." },
        { name: "Side Planks", sets: "3 sets", reps: "45 sec", description: "Hold side plank position. Excellent for oblique strength and stability." },
        { name: "Woodchoppers", sets: "3 sets", reps: "12-15 reps", description: "Use cable in diagonal chopping motion. Great for rotational strength." },
        { name: "Bicycle Crunches", sets: "3 sets", reps: "20 reps", description: "Alternate elbow to opposite knee. Highly effective for obliques." }
    ],
    "Left Quadriceps": [
        { name: "Barbell Squats", sets: "4 sets", reps: "6-10 reps", description: "King of leg exercises. Squat deep with chest up and knees tracking over toes." },
        { name: "Leg Press", sets: "4 sets", reps: "10-15 reps", description: "Press weight up with feet shoulder-width apart. Go deep for full quad activation." },
        { name: "Leg Extensions", sets: "3 sets", reps: "12-15 reps", description: "Extend legs until straight. Great quad isolation exercise." },
        { name: "Bulgarian Split Squats", sets: "3 sets", reps: "10-12 reps", description: "Rear foot elevated, squat down on front leg. Excellent for quad development." },
        { name: "Walking Lunges", sets: "3 sets", reps: "12 reps", description: "Lunge forward alternating legs. Great for functional leg strength." }
    ],
    "Right Quadriceps": [
        { name: "Barbell Squats", sets: "4 sets", reps: "6-10 reps", description: "King of leg exercises. Squat deep with chest up and knees tracking over toes." },
        { name: "Leg Press", sets: "4 sets", reps: "10-15 reps", description: "Press weight up with feet shoulder-width apart. Go deep for full quad activation." },
        { name: "Leg Extensions", sets: "3 sets", reps: "12-15 reps", description: "Extend legs until straight. Great quad isolation exercise." },
        { name: "Bulgarian Split Squats", sets: "3 sets", reps: "10-12 reps", description: "Rear foot elevated, squat down on front leg. Excellent for quad development." },
        { name: "Walking Lunges", sets: "3 sets", reps: "12 reps", description: "Lunge forward alternating legs. Great for functional leg strength." }
    ],
    "Left Adductors": [
        { name: "Adductor Machine", sets: "3 sets", reps: "12-15 reps", description: "Squeeze legs together against resistance. Primary adductor exercise." },
        { name: "Copenhagen Planks", sets: "3 sets", reps: "30 sec", description: "Side plank with top leg on bench. Excellent adductor strengthener." },
        { name: "Sumo Squats", sets: "3 sets", reps: "10-15 reps", description: "Wide stance squat. Emphasizes inner thighs and adductors." },
        { name: "Side Lunges", sets: "3 sets", reps: "12 reps", description: "Lunge to the side. Great for adductor flexibility and strength." }
    ],
    "Right Adductors": [
        { name: "Adductor Machine", sets: "3 sets", reps: "12-15 reps", description: "Squeeze legs together against resistance. Primary adductor exercise." },
        { name: "Copenhagen Planks", sets: "3 sets", reps: "30 sec", description: "Side plank with top leg on bench. Excellent adductor strengthener." },
        { name: "Sumo Squats", sets: "3 sets", reps: "10-15 reps", description: "Wide stance squat. Emphasizes inner thighs and adductors." },
        { name: "Side Lunges", sets: "3 sets", reps: "12 reps", description: "Lunge to the side. Great for adductor flexibility and strength." }
    ],
    "Left Calves": [
        { name: "Standing Calf Raises", sets: "4 sets", reps: "15-20 reps", description: "Raise up on toes with straight legs. Focus on full stretch at bottom." },
        { name: "Seated Calf Raises", sets: "3 sets", reps: "15-20 reps", description: "Targets soleus muscle. Important for complete calf development." },
        { name: "Donkey Calf Raises", sets: "3 sets", reps: "15-20 reps", description: "Bend at hips, perform calf raises. Great stretch and contraction." },
        { name: "Jump Rope", sets: "3 sets", reps: "60 sec", description: "Great for calf endurance and explosive power." }
    ],
    "Right Calves": [
        { name: "Standing Calf Raises", sets: "4 sets", reps: "15-20 reps", description: "Raise up on toes with straight legs. Focus on full stretch at bottom." },
        { name: "Seated Calf Raises", sets: "3 sets", reps: "15-20 reps", description: "Targets soleus muscle. Important for complete calf development." },
        { name: "Donkey Calf Raises", sets: "3 sets", reps: "15-20 reps", description: "Bend at hips, perform calf raises. Great stretch and contraction." },
        { name: "Jump Rope", sets: "3 sets", reps: "60 sec", description: "Great for calf endurance and explosive power." }
    ],
    "Left Tibialis": [
        { name: "Toe Raises", sets: "3 sets", reps: "15-20 reps", description: "Raise toes up while heels stay on ground. Strengthens shin muscles." },
        { name: "Resistance Band Dorsiflexion", sets: "3 sets", reps: "15-20 reps", description: "Pull toes toward shin against band resistance." },
        { name: "Heel Walks", sets: "3 sets", reps: "30 sec", description: "Walk on heels with toes up. Simple but effective for tibialis." },
        { name: "Tib Bar Raises", sets: "3 sets", reps: "12-15 reps", description: "Use tib bar for weighted tibialis training. Great for injury prevention." }
    ],
    "Right Tibialis": [
        { name: "Toe Raises", sets: "3 sets", reps: "15-20 reps", description: "Raise toes up while heels stay on ground. Strengthens shin muscles." },
        { name: "Resistance Band Dorsiflexion", sets: "3 sets", reps: "15-20 reps", description: "Pull toes toward shin against band resistance." },
        { name: "Heel Walks", sets: "3 sets", reps: "30 sec", description: "Walk on heels with toes up. Simple but effective for tibialis." },
        { name: "Tib Bar Raises", sets: "3 sets", reps: "12-15 reps", description: "Use tib bar for weighted tibialis training. Great for injury prevention." }
    ],
    "Head": [
        { name: "Reading & Learning", sets: "Daily", reps: "30+ min", description: "📚 Read books, articles, and research papers to expand knowledge and cognitive abilities." },
        { name: "Problem Solving", sets: "Daily", reps: "15+ min", description: "🧩 Work on puzzles, math problems, or coding challenges to sharpen analytical thinking." },
        { name: "Meditation", sets: "Daily", reps: "10-20 min", description: "🧘 Practice mindfulness and meditation to improve focus, reduce stress, and enhance mental clarity." },
        { name: "Creative Thinking", sets: "3-4x/week", reps: "20+ min", description: "🎨 Engage in creative activities like writing, drawing, or brainstorming to boost innovation." },
        { name: "Physical Exercise", sets: "Daily", reps: "30+ min", description: "🏃 Regular cardio and strength training improve brain health, memory, and cognitive function." }
    ]
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

// ============================
// MENU TOGGLE
// ============================

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    sideMenu.classList.toggle('active');
});

// ============================
// SVG LOADED HANDLER
// ============================

bodySvg.addEventListener('load', () => {
    const svgDoc = bodySvg.contentDocument;
    
    // Make SVG background transparent
    const svgElement = svgDoc.querySelector('svg');
    if (svgElement) {
        svgElement.style.background = 'transparent';
        
        // Remove or hide white background rectangles
        const rects = svgDoc.querySelectorAll('rect');
        rects.forEach(rect => {
            const fill = rect.getAttribute('fill') || rect.style.fill;
            // If it's a white or light colored rectangle, make it transparent
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
                // Check if it's NOT one of our muscle elements
                if (!element.id || !muscleMapping[element.id]) {
                    element.style.fill = 'transparent';
                    element.style.opacity = '0';
                }
            }
        });
    }
    
    // Get all muscle elements by their IDs
    Object.keys(muscleMapping).forEach(muscleId => {
        const muscleElement = svgDoc.getElementById(muscleId);
        
        if (muscleElement) {
            const muscleName = muscleMapping[muscleId];
            
            // Set default styling
            muscleElement.style.fill = '#9C9C9C';
            muscleElement.style.cursor = 'pointer';
            muscleElement.style.transition = 'all 0.3s ease';
            
            // Hover effect
            muscleElement.addEventListener('mouseenter', () => {
                muscleElement.style.fill = '#ef4444';
                muscleElement.style.filter = 'drop-shadow(0 0 8px #ef4444)';
                muscleDisplay.textContent = muscleName;
                muscleDisplay.classList.add('visible');
            });
            
            muscleElement.addEventListener('mouseleave', () => {
                muscleElement.style.fill = '#9C9C9C';
                muscleElement.style.filter = 'none';
                muscleDisplay.classList.remove('visible');
            });
            
            // Click to show exercises
            muscleElement.addEventListener('click', () => {
                showExercises(muscleName);
            });
        }
    });
});

// ============================
// SHOW EXERCISES MODAL
// ============================

function showExercises(muscleName) {
    const exercises = exerciseDatabase[muscleName];
    
    if (!exercises) {
        console.error('No exercises found for:', muscleName);
        return;
    }
    
    // Clear previous content
    exercisesGrid.innerHTML = '';
    modalTitle.textContent = muscleName + ' Training';
    
    // Get modal content element
    const modalContent = document.querySelector('.modal-content');
    
    // Special styling for Head
    if (muscleName === 'Head') {
        modalContent.classList.add('head-modal');
        
        // Add special message for head
        const headMessage = document.createElement('p');
        headMessage.style.textAlign = 'center';
        headMessage.style.fontSize = '18px';
        headMessage.style.color = '#a855f7';
        headMessage.style.marginBottom = '24px';
        headMessage.style.fontWeight = '600';
        headMessage.textContent = '🧠 You can only upgrade the head with knowledge';
        exercisesGrid.appendChild(headMessage);
    } else {
        modalContent.classList.remove('head-modal');
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
        `;
        
        exercisesGrid.appendChild(card);
    });
    
    // Show modal
    exerciseModal.classList.add('active');
}

// ============================
// CLOSE MODAL
// ============================

modalClose.addEventListener('click', () => {
    exerciseModal.classList.remove('active');
});

// Close modal when clicking outside
exerciseModal.addEventListener('click', (e) => {
    if (e.target === exerciseModal) {
        exerciseModal.classList.remove('active');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && exerciseModal.classList.contains('active')) {
        exerciseModal.classList.remove('active');
    }
});

// ============================
// CONSOLE MESSAGE
// ============================

console.log('🏋️ Muscle Training Atlas Loaded!');
console.log('💪 Click any muscle to see exercises');
console.log('📊 Total muscle groups:', Object.keys(muscleMapping).length);

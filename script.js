// COSMOS — datos e interacciones de la página
const planets = [
 {name:"Mercurio",order:"01 · PLANETA ROCOSO",desc:"El planeta más pequeño y cercano al Sol. Su superficie está cubierta de cráteres y experimenta cambios extremos de temperatura.",short:"El pequeño mundo más cercano al Sol.",curiosity:"Un año en Mercurio dura solo 88 días terrestres.",size:"4,879 km",temp:"−180 a 430 °C",composition:"Roca y metal",extra:"Mercurio no tiene lunas y su atmósfera es extremadamente tenue, por lo que no puede retener bien el calor.",color:"linear-gradient(135deg,#b8b4ae,#6e6b70 55%,#393b45)",className:"mercury"},
 {name:"Venus",order:"02 · PLANETA ROCOSO",desc:"Un mundo envuelto en nubes densas. Aunque no es el más cercano al Sol, es el planeta más caliente del sistema solar.",short:"Un planeta de nubes y calor extremo.",curiosity:"Un día en Venus dura más que su año.",size:"12,104 km",temp:"≈ 465 °C",composition:"Roca y metal",extra:"Su atmósfera, rica en dióxido de carbono, provoca un intenso efecto invernadero. Venus gira en sentido contrario al de la mayoría de los planetas.",color:"linear-gradient(135deg,#f6d69a,#b77843 55%,#71462e)",className:"venus"},
 {name:"Tierra",order:"03 · PLANETA ROCOSO",desc:"Nuestro hogar: un planeta con agua líquida en la superficie, una atmósfera protectora y una gran diversidad de vida conocida.",short:"Nuestro hogar, un mundo lleno de vida.",curiosity:"La Tierra es el único mundo conocido con vida.",size:"12,742 km",temp:"≈ 15 °C (media)",composition:"Roca, metal y agua",extra:"Su campo magnético ayuda a proteger la superficie del viento solar. La Luna es su único satélite natural permanente.",color:"linear-gradient(135deg,#80e1d0,#2d86cb 50%,#15306e)",className:"earth"},
 {name:"Marte",order:"04 · PLANETA ROCOSO",desc:"Conocido como el planeta rojo por el óxido de hierro de su superficie. Tiene volcanes gigantes, cañones y señales de antiguos ríos.",short:"El planeta rojo que guarda huellas del pasado.",curiosity:"Marte alberga Olympus Mons, un volcán gigantesco.",size:"6,779 km",temp:"≈ −65 °C (media)",composition:"Roca y metal",extra:"Marte tiene dos pequeñas lunas, Fobos y Deimos. Es uno de los principales objetivos de la exploración robótica y futura exploración humana.",color:"linear-gradient(135deg,#f5b18b,#bc543b 55%,#6d2e2b)",className:"mars"},
 {name:"Júpiter",order:"05 · GIGANTE GASEOSO",desc:"El planeta más grande del sistema solar. Sus bandas de nubes y enormes tormentas dominan su atmósfera.",short:"El gigante que domina el sistema solar.",curiosity:"La Gran Mancha Roja es una tormenta que lleva siglos activa.",size:"139,820 km",temp:"≈ −110 °C (nubes)",composition:"Hidrógeno y helio",extra:"Júpiter tiene un sistema de anillos tenue y numerosas lunas. Ganímedes, una de ellas, es la luna más grande del sistema solar.",color:"linear-gradient(160deg,#e8c8a3,#a86f50 25%,#f1d8b2 40%,#8c5d47 55%,#d9ae84 75%,#704938)",className:"jupiter"},
 {name:"Saturno",order:"06 · GIGANTE GASEOSO",desc:"Un gigante gaseoso reconocido por su espectacular sistema de anillos, formado principalmente por partículas de hielo y roca.",short:"El planeta de los anillos más famosos.",curiosity:"Saturno tiene una densidad media menor que la del agua.",size:"116,460 km",temp:"≈ −140 °C (nubes)",composition:"Hidrógeno y helio",extra:"Sus anillos se extienden a enormes distancias, pero son relativamente delgados. Saturno cuenta con numerosas lunas, incluida Titán.",color:"linear-gradient(145deg,#f5e0aa,#c7a36d 50%,#806447)",className:"saturn"},
 {name:"Urano",order:"07 · GIGANTE HELADO",desc:"Un gigante helado de color azul verdoso debido al metano de su atmósfera. Su eje está inclinado de forma extrema.",short:"Un mundo helado que gira casi de lado.",curiosity:"Urano rota con una inclinación cercana a 98 grados.",size:"50,724 km",temp:"≈ −195 °C (media)",composition:"Hielos, gas y roca",extra:"Urano tiene anillos oscuros y un sistema de lunas. Su atmósfera contiene hidrógeno, helio y metano.",color:"linear-gradient(135deg,#c3f7ee,#6ab9c7 55%,#3c718e)",className:"uranus"},
 {name:"Neptuno",order:"08 · GIGANTE HELADO",desc:"Un mundo azul, lejano y ventoso. Neptuno completa una órbita alrededor del Sol en aproximadamente 165 años terrestres.",short:"Un gigante azul en los confines planetarios.",curiosity:"Sus vientos pueden superar los 2,000 km/h.",size:"49,244 km",temp:"≈ −200 °C (media)",composition:"Hielos, gas y roca",extra:"Neptuno fue identificado mediante cálculos matemáticos antes de ser observado directamente. Tiene una gran luna llamada Tritón.",color:"linear-gradient(135deg,#8ebdff,#3159c4 55%,#182d76)",className:"neptune"}
];
const facts = [
 "La luz del Sol tarda aproximadamente 8 minutos y 20 segundos en llegar a la Tierra.",
 "Un día en Venus dura más que su año: gira sobre sí mismo más lentamente de lo que completa su órbita.",
 "Júpiter es el planeta más grande del sistema solar; cabrían más de 1,300 Tierras en su volumen, aproximadamente.",
 "El espacio no está completamente vacío: contiene gas, polvo, radiación y campos magnéticos.",
 "La huella de un astronauta puede permanecer mucho tiempo en la Luna porque allí casi no hay viento ni lluvia que la borren.",
 "La Vía Láctea contiene cientos de miles de millones de estrellas, según las estimaciones astronómicas."
];
const exploration = [
 {title:"La Luna",tag:"SATÉLITE NATURAL",text:"Nuestro vecino celeste influye en las mareas y conserva en su superficie huellas de impactos de miles de millones de años.",img:"https://images.unsplash.com/photo- moon"},
 {title:"El Sol",tag:"NUESTRA ESTRELLA",text:"Una enorme esfera de plasma que proporciona la energía que sostiene gran parte de la vida en la Tierra.",img:"https://images.unsplash.com/photo-1534796636912-3b95b3ab5986"},
 {title:"Agujeros negros",tag:"GRAVEDAD EXTREMA",text:"Regiones del espacio donde la gravedad es tan intensa que, más allá del horizonte de sucesos, ni siquiera la luz puede escapar.",img:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564"},
 {title:"Galaxias",tag:"ISLAS DE ESTRELLAS",text:"Enormes sistemas de estrellas, gas, polvo y materia oscura unidos por la gravedad. Nuestra galaxia es la Vía Láctea.",img:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564"},
 {title:"Viajes espaciales",tag:"MÁS ALLÁ DE LA TIERRA",text:"La exploración espacial combina ciencia, ingeniería y tecnología para estudiar otros mundos y ampliar nuestro conocimiento.",img:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"},
 {title:"Nebulosas",tag:"FÁBRICAS ESTELARES",text:"Nubes gigantes de gas y polvo donde pueden nacer estrellas o quedar los restos de estrellas que llegaron al final de su vida.",img:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564"}
];
// Imágenes de respaldo: si una URL externa falla, se usa un fondo degradado atractivo.
const imagePool = [
 "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
 "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=80",
 "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=900&q=80",
 "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=900&q=80",
 "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
 "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=900&q=80"
];
const planetGrid = document.getElementById("planetGrid");
function sphereMarkup(planet){return `<div class="planet-sphere ${planet.className}" style="background:${planet.color}" aria-hidden="true"></div>`;}
planets.forEach((planet,index)=>{
 const card=document.createElement("article"); card.className="planet-card";
 card.innerHTML=`<div class="planet-art">${sphereMarkup(planet)}</div><h3>${planet.name}</h3><p>${planet.short}</p><button type="button" data-planet="${index}">Descubrir más <span>↗</span></button>`;
 planetGrid.appendChild(card);
});
const dialog=document.getElementById("planetDialog");
planetGrid.addEventListener("click",e=>{
 const button=e.target.closest("[data-planet]"); if(!button)return;
 const p=planets[Number(button.dataset.planet)];
 document.getElementById("dialogVisual").innerHTML=sphereMarkup(p);
 document.getElementById("dialogOrder").textContent=p.order;
 document.getElementById("dialogName").textContent=p.name;
 document.getElementById("dialogDescription").textContent=p.desc;
 document.getElementById("dialogExtra").textContent=p.extra;
 document.getElementById("dialogFacts").innerHTML=`<div class="dialog-fact"><span>Diámetro</span><strong>${p.size}</strong></div><div class="dialog-fact"><span>Temperatura</span><strong>${p.temp}</strong></div><div class="dialog-fact"><span>Composición</span><strong>${p.composition}</strong></div>`;
 dialog.showModal();
});
document.getElementById("dialogClose").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close();});

// Datos curiosos: selección aleatoria sin repetir el dato mostrado inmediatamente.
let currentFact=-1;
function showRandomFact(){
 let next; do{next=Math.floor(Math.random()*facts.length)}while(facts.length>1&&next===currentFact);
 currentFact=next;
 document.getElementById("randomFact").textContent=facts[next];
 document.getElementById("factCounter").textContent=`${String(next+1).padStart(2,"0")} / ${String(facts.length).padStart(2,"0")}`;
}
document.getElementById("randomFactBtn").addEventListener("click",showRandomFact);
const factCards=document.getElementById("factCards");
facts.slice(1,4).forEach((fact,i)=>{const el=document.createElement("article");el.className="fact-card";el.innerHTML=`<span>✧ 0${i+1}</span><p>${fact}</p>`;factCards.appendChild(el)});

// Tarjetas de exploración espacial
const exploreGrid=document.getElementById("exploreGrid");
const exploreDescriptions=[
 ["La Luna","SATÉLITE NATURAL","Nuestro vecino celeste influye en las mareas y conserva huellas de impactos de miles de millones de años."],
 ["El Sol","NUESTRA ESTRELLA","Una enorme esfera de plasma que proporciona la energía que sostiene gran parte de la vida en la Tierra."],
 ["Agujeros negros","GRAVEDAD EXTREMA","Regiones donde la gravedad es tan intensa que, más allá del horizonte de sucesos, ni siquiera la luz puede escapar."],
 ["Galaxias","ISLAS DE ESTRELLAS","Enormes sistemas de estrellas, gas, polvo y materia oscura unidos por la gravedad. Nuestra galaxia es la Vía Láctea."],
 ["Viajes espaciales","MÁS ALLÁ DE LA TIERRA","La exploración espacial combina ciencia, ingeniería y tecnología para estudiar otros mundos."],
 ["Nebulosas","FÁBRICAS ESTELARES","Nubes gigantes de gas y polvo donde pueden nacer estrellas o quedar restos de estrellas que llegaron al final de su vida."]
];
exploreDescriptions.forEach((item,i)=>{
 const card=document.createElement("article");card.className="explore-card";
 const img=imagePool[i];
 card.innerHTML=`<div class="explore-image"><img src="${img}" alt="${item[0]} en el espacio" loading="lazy"><span class="explore-number">0${i+1} / COSMOS</span></div><div class="explore-body"><span class="eyebrow">${item[1]}</span><h3>${item[0]}</h3><p>${item[2]}</p></div>`;
 const image=card.querySelector("img");image.addEventListener("error",()=>{image.style.display="none";card.querySelector(".explore-image").style.background="radial-gradient(ellipse at 40% 40%,#50427f,#10172d 70%)";});
 exploreGrid.appendChild(card);
});

// Mini juego de cinco preguntas
const questions=[
 {q:"¿Cuál es el planeta más grande del sistema solar?",a:["Saturno","Júpiter","Neptuno","Tierra"],correct:1,why:"Júpiter es el planeta más grande del sistema solar."},
 {q:"¿Qué planeta es conocido como el planeta rojo?",a:["Venus","Mercurio","Marte","Urano"],correct:2,why:"Marte tiene un tono rojizo debido a los minerales de hierro oxidados de su superficie."},
 {q:"¿Qué estrella se encuentra en el centro de nuestro sistema solar?",a:["Sirio","Polaris","Próxima Centauri","El Sol"],correct:3,why:"El Sol es la estrella alrededor de la cual orbitan los planetas del sistema solar."},
 {q:"¿Cuál es el satélite natural de la Tierra?",a:["Europa","Titán","La Luna","Fobos"],correct:2,why:"La Luna es el satélite natural de la Tierra."},
 {q:"¿Qué planeta es famoso por su sistema de anillos?",a:["Saturno","Marte","Mercurio","Venus"],correct:0,why:"Aunque otros planetas también tienen anillos, los de Saturno son los más visibles y conocidos."}
];
let questionIndex=0,score=0,answered=false;
const questionText=document.getElementById("questionText"),answerGrid=document.getElementById("answerGrid"),feedback=document.getElementById("quizFeedback"),nextBtn=document.getElementById("nextQuestion");
function renderQuestion(){
 const q=questions[questionIndex];answered=false;
 document.getElementById("questionProgress").textContent=`PREGUNTA ${String(questionIndex+1).padStart(2,"0")} / 05`;
 document.getElementById("progressFill").style.width=`${((questionIndex+1)/questions.length)*100}%`;
 document.getElementById("score").textContent=score;
 questionText.textContent=q.q;answerGrid.innerHTML="";feedback.textContent="";nextBtn.hidden=true;
 q.a.forEach((answer,i)=>{const button=document.createElement("button");button.className="answer-option";button.textContent=`${String.fromCharCode(65+i)}.  ${answer}`;button.addEventListener("click",()=>chooseAnswer(i,button));answerGrid.appendChild(button);});
}
function chooseAnswer(choice,button){
 if(answered)return;answered=true;
 const q=questions[questionIndex];const options=[...answerGrid.children];
 options.forEach((opt,i)=>{opt.disabled=true;if(i===q.correct)opt.classList.add("correct");});
 if(choice===q.correct){score++;feedback.textContent=`¡Correcto! ${q.why}`;}else{button.classList.add("incorrect");feedback.style.color="#f39aaa";feedback.textContent=`No exactamente. ${q.why}`;}
 document.getElementById("score").textContent=score;
 nextBtn.textContent=questionIndex===questions.length-1?"Ver resultado →":"Siguiente pregunta →";nextBtn.hidden=false;
}
nextBtn.addEventListener("click",()=>{
 if(questionIndex<questions.length-1){questionIndex++;renderQuestion();}
 else{document.getElementById("quizContent").hidden=true;document.getElementById("quizResult").hidden=false;document.getElementById("finalScore").textContent=`${score}/5`;document.getElementById("resultTitle").textContent=score===5?"¡Eres una estrella del cosmos!":score>=3?"¡Excelente viaje, explorador!":"¡Tu aventura espacial apenas comienza!";document.getElementById("resultText").textContent=score===5?"Has respondido correctamente todas las preguntas. ¡Tu conocimiento del universo brilla!":`Acertaste ${score} de 5 preguntas. Sigue explorando y vuelve a intentarlo para superar tu marca.`;}
});
function restartQuiz(){questionIndex=0;score=0;document.getElementById("quizContent").hidden=false;document.getElementById("quizResult").hidden=true;renderQuestion();}
document.getElementById("restartQuiz").addEventListener("click",restartQuiz);
renderQuestion();

// Menú móvil
const menuToggle=document.getElementById("menuToggle"),mainNav=document.getElementById("mainNav");
menuToggle.addEventListener("click",()=>{const open=mainNav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.setAttribute("aria-label",open?"Cerrar menú":"Abrir menú");menuToggle.textContent=open?"×":"☰";});
mainNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{mainNav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.textContent="☰";}));

// Campo de estrellas animado con canvas, adaptable al tamaño de pantalla.
const canvas=document.getElementById("starfield"),ctx=canvas.getContext("2d");let stars=[],w=0,h=0;
function resizeCanvas(){const dpr=Math.min(window.devicePixelRatio||1,2);w=window.innerWidth;h=window.innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+"px";canvas.style.height=h+"px";ctx.setTransform(dpr,0,0,dpr,0,0);stars=Array.from({length:Math.min(180,Math.floor(w*h/6500))},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.25+.25,a:Math.random()*.65+.15,s:Math.random()*.22+.04,phase:Math.random()*Math.PI*2}));}
function animateStars(time){ctx.clearRect(0,0,w,h);stars.forEach(star=>{const twinkle=.55+.45*Math.sin(time*.001*star.s*5+star.phase);ctx.beginPath();ctx.arc(star.x,star.y,star.r,0,Math.PI*2);ctx.fillStyle=`rgba(205,218,255,${star.a*twinkle})`;ctx.fill();});requestAnimationFrame(animateStars);}
window.addEventListener("resize",resizeCanvas);resizeCanvas();requestAnimationFrame(animateStars);

// Aparición sutil de tarjetas al entrar en pantalla
if("IntersectionObserver" in window){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.08});
 document.querySelectorAll(".planet-card,.fact-card,.explore-card").forEach(el=>{el.style.opacity="0";el.style.transform="translateY(14px)";el.style.transition="opacity .55s ease, transform .55s ease";observer.observe(el);});
 const style=document.createElement("style");style.textContent=".visible{opacity:1!important;transform:translateY(0)!important}";document.head.appendChild(style);
}

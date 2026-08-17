const facts=[
"Golden Retrievers were originally bred to retrieve game.",
"Huskies can survive extremely cold temperatures.",
"Beagles have one of the strongest senses of smell.",
"Dogs can understand many human emotions."
];


export default function DogFact(){

const fact =
facts[Math.floor(Math.random()*facts.length)];


return(

<div
className="
mt-10
bg-yellow-100
p-5
rounded-2xl
"
>

🐾 Did you know?

<p className="mt-2">
{fact}
</p>


</div>

)

}
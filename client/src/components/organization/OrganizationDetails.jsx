import  {BsFacebook, BsLinkedin} from 'react-icons/bs';
import GmailIcon from '../shared/GmailIcon';
import SlackIcon from '../shared/SlackIcon';


import Tabs from '../shared/Tab/Tab';
import SmallEventCard from './SmallEventCard';
import TeamCard from './TeamCard';
// import { SiGmail } from "react-icons/si";


const OrganizationDetails = () => {
  const tabsTitle=["Description", "Plan d'action", "Vision"]
  const eventsList=[
    {id:1,
    title: "event1",
  },
  {id:2,
    title: "event2",
  },
  ]
    return (
      <div className="flex flex-row justify-center gap-10 px-10">
      <div className='left-container flex w-2/3 flex-col justify-center gap-10'>
        <div className="card  w-full glass place-content-center flex-auto">
        <figure>
          <div className="avatar-group w-full -space-y-28 flex-col ">
            <img className='max-w-10xl h-72 w-full' src="https://placeimg.com/400/225/arch" alt="car!" />
          <div className="avatar border-0 pl-10">
            <div className="w-48 rounded-full border-4 border-inherit">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </div>
        </figure>
        <div className="card-body ml-56 -mt-24 ">
  
          <h2 className="card-title text-3xl">Organization name</h2>
          <p >Creation date </p>
          <span className="badge rounded-md text-lg h-1/5 mt-2">Oragnization sector</span>
          <div className="socail-media flex flex-row gap-10">
            <div className=" grid h-9 w-9  border-2 rounded-md border-slate-300 place-content-evenly mt-5">
            <BsFacebook className="h-7 w-7 " style={{color: "#3b5998" }}/>
            </div>
            <div className=" grid h-9 w-9  border-2 rounded-md border-slate-300 place-content-evenly mt-5">
            
            <GmailIcon/>
            </div>
           
            <div className=" grid h-9 w-9  border-2 rounded-md border-slate-300 place-content-evenly mt-5">
            <BsLinkedin className="h-7 w-7" style={{color: "#3b5998" }}/>
            </div>
            
            <div className=" grid h-9 w-9  border-2 rounded-md border-slate-300 place-content-evenly mt-5">
        
              <SlackIcon/>
            </div>
           
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn more!</button>
          </div>
        </div>

      
      </div>

      <div className="body-container w-full glass rounded-2xl ">
      {/* <div className="tabs h-14">
        <a className="tab tab-lifted h-full">Description</a> 
        <a className="tab tab-lifted tab-active h-full">plan d'action</a> 
        <a className="tab tab-lifted h-full">Vision</a>
      </div> */}
      <Tabs 
      tabsTitle={tabsTitle}
      content1="La description a été codifiée dès la rhétorique ancienne sous le nom grec d'ekphrasis (qu'on pourrait traduire comme morceau discursif détaché). À l'origine, elle relève surtout du discours d'apparat (genre épidictique) qui appelle la description élogieuse de personnes, de lieux ou de moments privilégiés. Et nous pouvons nous faire une idée de ce qu'elle a été si nous songeons à des pratiques rhétoriques encore vivantes aujourd'hui comme l'éloge funèbre, les discours d'inauguration ou les messages d'amitiés diplomatiquement échangés lors de visites de chefs d'état.

      On la trouve également en poésie. Dans les poèmes homériques, elle s'attache à représenter des objets précieux: roues de char sculptées, boucliers ouvragés, ornements d'ivoire. La description a alors pour objet de rivaliser de richesse avec l'objet représenté. Pour le poète, elle est aussi l'occasion de montrer son savoir faire: connaissance des modèles, variété du lexique et maîtrise des figures. La description a alors une ambition moins réaliste qu'ornementale.
      
      La description au sens moderne, c'est-à-dire réaliste, du terme est née en dehors de la littérature. Depuis l'Antiquité, un certain nombre de discours techniques ou scientifiques ont recours à elle: c'est par exemple la géographie, particulièrement dans son usage militaire (décrire des paysages cela peut aussi servir à faire la guerre); c'est aussi l'architecture (la description a pour fonction de commenter des plans), la zoologie ou la botanique (il s'agit cette fois d'observer pour classer); n'oublions pas enfin le discours judiciaire (il est important de décrire les circonstances d'un délit ou de faire un portrait du caractère d'un inculpé). À la Renaissance, on appelle aussi description un ouvrage décrivant des villes à l'usage des touristes, des curieux ou des hommes d'affaires (c'est un peu l'ancêtre de nos Guides verts). L'essor de la description apparaît donc étroitement lié à l'expansion des sciences et des techniques.
      
      prend de plus en plus à son aise, il saisit l'occasion de me glisser ses cartes postales, il cherche à me faire tomber d'accord avec lui sur des lieux communs!
      
      La description est donc suspecte de nuire à la littérature. Que lui reproche-t-on exactement? d'abord d'être anti-poétique, à cause des lexiques trop techniques qui n'aident pas le lecteur à se représenter les objets désignés. On l'accuse aussi d'être arbitraire dans ses dimensions: effectivement, une description n'a aucune raison de s'arrêter, elle est toujours virtuellement interminable. Enfin, on la considère comme étrangère à la structure organique des œuvres littéraires puisqu'elle s'en détache facilement pour former des morceaux choisis ou fragments d'anthologie (si ce n'est des dictées…).Il est constitué du nom de la relation, du nom de ses attributs, de la clé primaire et des clés étrangères. Le schéma relationnel correspond à l'ensemble des relations présentes dans une base de données. Le schéma relationnel d'une base de données est composé de l'ensemble des schémas de relation de cette base."
      content2={"Demander aux présidents de commission Marketing de district et de club d'élaborer un plan pour communiquer et fêter ces succès. • Collaborer avec les présidents ..."}
      content3={"Perception du monde extérieur par la vue ; mécanisme physiologique par lequel les radiations lumineuses donnent naissance à des sensations visuelles.Vision nette, indistincte"}

      />
      </div>  

      </div>
        <div className="right-container flex w-1/3 flex-col  gap-10">
          <div className="card  bg-base-100 glass h-auto ">
            <div className="card-body">
              <h2 className="card-title">Team</h2>
              <div className="avatar-group -space-y-6 flex-col">
                <TeamCard/>
                <TeamCard/>
                <TeamCard/>
                <TeamCard/>
          
              </div>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral-focus text-neutral-content btn btn-primary">
                    <span>+99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card  bg-base-100 glass h-1/3 ">
            <div className="card-body gap-4 ">
            <h2 className="card-title">Events</h2>
                {eventsList.map((event) =>
                <SmallEventCard event={event}/>
                )}

                <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral-focus text-neutral-content btn btn-primary">
                    <span>+99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default OrganizationDetails
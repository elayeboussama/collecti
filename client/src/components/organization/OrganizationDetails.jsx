import  {BsFacebook, BsLinkedin} from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { useOrgDetailsQuery } from '../../endpoints/AuthEndpoints';
import GmailIcon from '../shared/GmailIcon';
import SlackIcon from '../shared/SlackIcon';


import Tabs from '../shared/Tab/Tab';
import SmallEventCard from './SmallEventCard';
import TeamCard from './TeamCard';
// import { SiGmail } from "react-icons/si";


const OrganizationDetails = () => {
  let { organizationId } = useParams();
   const { data, isLoading } = useOrgDetailsQuery(organizationId)
  console.log("rrrrrrrrrr",organizationId)
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
      <div className='flex flex-col w-2/3 gap-10 left-container'>
        <div className="flex-initial w-full card glass place-content-center max-h-max">
        <figure>
          <div className="flex-col w-full avatar-group -space-y-28 ">
            <img className='w-full max-w-10xl h-72' src="https://placeimg.com/400/225/arch" alt="car!" />
          <div className="pl-10 border-0 avatar">
            <div className="w-48 border-4 rounded-full border-inherit">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </div>
        </figure>
        <div className="ml-56 -mt-24 card-body ">
  
          <h2 className="text-3xl card-title">Organization name</h2>
          <p >Creation date </p>
          <span className="mt-2 text-lg rounded-md badge h-1/5">Oragnization sector</span>
          <div className="flex flex-row gap-10 socail-media">
            <div className="grid mt-5 border-2 rounded-md h-9 w-9 border-slate-300 place-content-evenly">
            <BsFacebook className="h-7 w-7 " style={{color: "#3b5998" }}/>
            </div>
            <div className="grid mt-5 border-2 rounded-md h-9 w-9 border-slate-300 place-content-evenly">
            
            <GmailIcon/>
            </div>
           
            <div className="grid mt-5 border-2 rounded-md h-9 w-9 border-slate-300 place-content-evenly">
            <BsLinkedin className="h-7 w-7" style={{color: "#3b5998" }}/>
            </div>
            
            <div className="grid mt-5 border-2 rounded-md h-9 w-9 border-slate-300 place-content-evenly">
        
              <SlackIcon/>
            </div>
           
          </div>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Learn more!</button>
          </div>
        </div>

      
      </div>

      <div className="w-full body-container glass rounded-2xl ">
      <Tabs 
      tabsTitle={tabsTitle}
      content1="La description a été codifiée dès la rhétorique ancienne sous le nom grec d'ekphrasis (qu'on pourrait traduire comme morceau discursif détaché). À l'origine, elle relève surtout du discours d'apparat (genre épidictique) qui appelle la description élogieuse de personnes, de lieux ou de moments privilégiés. Et nous pouvons nous faire une idée de ce qu'elle a été si nous songeons à des pratiques rhétoriques encore vivantes aujourd'hui comme l'éloge funèbre, les discours d'inauguration ou les messages d'amitiés diplomatiquement échangés lors de visites de chefs d'état.

      On la trouve également en poésie. Dans les poèmes homériques, elle s'attache à représenter des objets précieux: roues de char sculptées, boucliers ouvragés, ornements d'ivoire. La description a alors pour objet de rivaliser de richesse avec l'objet représenté. Pour le poète, elle est aussi l'occasion de montrer son savoir faire: connaissance des modèles, variété du lexique et maîtrise des figures. La description a alors une ambition moins réaliste qu'ornementale.
      
      La description au sens moderne, c'est-à-dire réaliste, du terme est née en dehors de la littérature. Depuis l'Antiquité, un certain nombre de discours techniques ou scientifiques ont recours à elle: c'est par exemple la géographie, particulièrement dans son usage militaire (décrire des paysages cela peut aussi servir à faire la guerre); c'est aussi l'architecture (la description a pour fonction de commenter des plans), la zoologie ou la botanique (il s'agit cette fois d'observer pour classer); n'oublions pas enfin le discours judiciaire (il est important de décrire les circonstances d'un délit ou de faire un portrait du caractère d'un inculpé). À la Renaissance, on appelle aussi description un ouvrage décrivant des villes à l'usage des touristes, des curieux ou des hommes d'affaires (c'est un peu l'ancêtre de nos Guides verts). L'essor de la description apparaît donc étroitement lié à l'expansion des sciences et des techniques.
      
      prend de plus en plus à son aise, il saisit l'occasion de me glisser ses cartes postales, il cherche à me faire tomber d'accord avec lui sur des lieux communs!
      
      La description est donc suspecte de nuire à la littérature. Que lui reproche-t-on exactement? d'abord d'être anti-poétique, à cause des lexiques trop techniques qui n'aident pas le lecteur à se représenter les objets désignés. On l'accuse aussi d'être arbitraire dans ses dimensions: effectivement, une description n'a aucune raison de s'arrêter, elle est toujours virtuellement interminable. Enfin, on la considère comme étrangère à la structure organique des œuvres littéraires puisqu'elle s'en détache facilement pour former des morceaux choisis ou fragments d'anthologie (si ce n'est des dictées…).Il est constitué du nom de la relation, du nom de ses attributs, de la clé primaire et des clés étrangères. Le schéma relationnel correspond à l'ensemble des relations présentes dans une base de données. Le schéma relationnel d'une base de données est composé de l'ensemble des schémas de relation de cette base."
      content2={"a description au sens moderne, c'est-à-dire réaliste, du terme est née en dehors de la littérature. Depuis l'Antiquité, un certain nombre de discours techniques ou scientifiques ont recours à elle: c'est par exemple la géographie, particulièrement dans son usage militaire (décrire des paysages cela peut aussi servir à faire la guerre); c'est aussi l'architecture (la description a pour fonction de commenter des plans), la zoologie ou la botanique (il s'agit cette fois d'observer pour classer); n'oublions pas enfin le discours judiciaire (il est important de décrire les circonstances d'un délit ou de faire un portrait du caractère d'un inculpé). À la Renaissance, on appelle aussi description un ouvrage décrivant des villes à l'usage des touristes, des curieux ou des hommes d'affaires (c'est un peu l'ancêtre de nos Guides verts). L'essor de la description apparaît donc étroitement lié à l'expansion des sciences et des techniques. Demander aux présidents de commission Marketing de district et de club d'élaborer un plan pour communiquer et fêter ces succès. • Collaborer avec les présidents ..."}
      content3={"a description au sens moderne, c'est-à-dire réaliste, du terme est née en dehors de la littérature. Depuis l'Antiquité, un certain nombre de discours techniques ou scientifiques ont recours à elle: c'est par exemple la géographie, particulièrement dans son usage militaire (décrire des paysages cela peut aussi servir à faire la guerre); c'est aussi l'architecture (la description a pour fonction de commenter des plans), la zoologie ou la botanique (il s'agit cette fois d'observer pour classer); n'oublions pas enfin le discours judiciaire (il est important de décrire les circonstances d'un délit ou de faire un portrait du caractère d'un inculpé). À la Renaissance, on appelle aussi description un ouvrage décrivant des villes à l'usage des touristes, des curieux ou des hommes d'affaires (c'est un peu l'ancêtre de nos Guides verts). L'essor de la description apparaît donc étroitement lié à l'expansion des sciences et des techniques.Perception du monde extérieur par la vue ; mécanisme physiologique par lequel les radiations lumineuses donnent naissance à des sensations visuelles.Vision nette, indistincte"}

      />
      </div>  

      </div>
        <div className="flex flex-col w-1/3 gap-10 right-container">
          <div className="h-auto card bg-base-100 glass ">
            <div className="card-body">
              <h2 className="card-title">Team</h2>
              <div className="flex-col -space-y-6 avatar-group">
                <TeamCard/>
                <TeamCard/>
                <TeamCard/>
                <TeamCard/>
          
              </div>
              <div className="justify-end card-actions">
                {/* <button className="btn btn-primary">Buy Now</button> */}
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral-focus text-neutral-content btn btn-primary">
                    <span>+99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 glass h-2/5 ">
            <div className="gap-4 card-body ">
            <h2 className="card-title">Events</h2>
                {eventsList.map((event) =>
                <SmallEventCard event={event}/>
                )}

                <div className="justify-end card-actions">
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
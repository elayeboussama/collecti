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
      <div className='left-container flex w-2/3 flex-col  gap-10'>
        <div className="card flex-initial w-full glass place-content-center max-h-max">
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
      <Tabs 
      tabsTitle={tabsTitle}
      content1="La description a ??t?? codifi??e d??s la rh??torique ancienne sous le nom grec d'ekphrasis (qu'on pourrait traduire comme morceau discursif d??tach??). ?? l'origine, elle rel??ve surtout du discours d'apparat (genre ??pidictique) qui appelle la description ??logieuse de personnes, de lieux ou de moments privil??gi??s. Et nous pouvons nous faire une id??e de ce qu'elle a ??t?? si nous songeons ?? des pratiques rh??toriques encore vivantes aujourd'hui comme l'??loge fun??bre, les discours d'inauguration ou les messages d'amiti??s diplomatiquement ??chang??s lors de visites de chefs d'??tat.

      On la trouve ??galement en po??sie. Dans les po??mes hom??riques, elle s'attache ?? repr??senter des objets pr??cieux: roues de char sculpt??es, boucliers ouvrag??s, ornements d'ivoire. La description a alors pour objet de rivaliser de richesse avec l'objet repr??sent??. Pour le po??te, elle est aussi l'occasion de montrer son savoir faire: connaissance des mod??les, vari??t?? du lexique et ma??trise des figures. La description a alors une ambition moins r??aliste qu'ornementale.
      
      La description au sens moderne, c'est-??-dire r??aliste, du terme est n??e en dehors de la litt??rature. Depuis l'Antiquit??, un certain nombre de discours techniques ou scientifiques ont recours ?? elle: c'est par exemple la g??ographie, particuli??rement dans son usage militaire (d??crire des paysages cela peut aussi servir ?? faire la guerre); c'est aussi l'architecture (la description a pour fonction de commenter des plans), la zoologie ou la botanique (il s'agit cette fois d'observer pour classer); n'oublions pas enfin le discours judiciaire (il est important de d??crire les circonstances d'un d??lit ou de faire un portrait du caract??re d'un inculp??). ?? la Renaissance, on appelle aussi description un ouvrage d??crivant des villes ?? l'usage des touristes, des curieux ou des hommes d'affaires (c'est un peu l'anc??tre de nos Guides verts). L'essor de la description appara??t donc ??troitement li?? ?? l'expansion des sciences et des techniques.
      
      prend de plus en plus ?? son aise, il saisit l'occasion de me glisser ses cartes postales, il cherche ?? me faire tomber d'accord avec lui sur des lieux communs!
      
      La description est donc suspecte de nuire ?? la litt??rature. Que lui reproche-t-on exactement? d'abord d'??tre anti-po??tique, ?? cause des lexiques trop techniques qui n'aident pas le lecteur ?? se repr??senter les objets d??sign??s. On l'accuse aussi d'??tre arbitraire dans ses dimensions: effectivement, une description n'a aucune raison de s'arr??ter, elle est toujours virtuellement interminable. Enfin, on la consid??re comme ??trang??re ?? la structure organique des ??uvres litt??raires puisqu'elle s'en d??tache facilement pour former des morceaux choisis ou fragments d'anthologie (si ce n'est des dict??es???).Il est constitu?? du nom de la relation, du nom de ses attributs, de la cl?? primaire et des cl??s ??trang??res. Le sch??ma relationnel correspond ?? l'ensemble des relations pr??sentes dans une base de donn??es. Le sch??ma relationnel d'une base de donn??es est compos?? de l'ensemble des sch??mas de relation de cette base."
      content2={"a description au sens moderne, c'est-??-dire r??aliste, du terme est n??e en dehors de la litt??rature. Depuis l'Antiquit??, un certain nombre de discours techniques ou scientifiques ont recours ?? elle: c'est par exemple la g??ographie, particuli??rement dans son usage militaire (d??crire des paysages cela peut aussi servir ?? faire la guerre); c'est aussi l'architecture (la description a pour fonction de commenter des plans), la zoologie ou la botanique (il s'agit cette fois d'observer pour classer); n'oublions pas enfin le discours judiciaire (il est important de d??crire les circonstances d'un d??lit ou de faire un portrait du caract??re d'un inculp??). ?? la Renaissance, on appelle aussi description un ouvrage d??crivant des villes ?? l'usage des touristes, des curieux ou des hommes d'affaires (c'est un peu l'anc??tre de nos Guides verts). L'essor de la description appara??t donc ??troitement li?? ?? l'expansion des sciences et des techniques. Demander aux pr??sidents de commission Marketing de district et de club d'??laborer un plan pour communiquer et f??ter ces succ??s. ??? Collaborer avec les pr??sidents ..."}
      content3={"a description au sens moderne, c'est-??-dire r??aliste, du terme est n??e en dehors de la litt??rature. Depuis l'Antiquit??, un certain nombre de discours techniques ou scientifiques ont recours ?? elle: c'est par exemple la g??ographie, particuli??rement dans son usage militaire (d??crire des paysages cela peut aussi servir ?? faire la guerre); c'est aussi l'architecture (la description a pour fonction de commenter des plans), la zoologie ou la botanique (il s'agit cette fois d'observer pour classer); n'oublions pas enfin le discours judiciaire (il est important de d??crire les circonstances d'un d??lit ou de faire un portrait du caract??re d'un inculp??). ?? la Renaissance, on appelle aussi description un ouvrage d??crivant des villes ?? l'usage des touristes, des curieux ou des hommes d'affaires (c'est un peu l'anc??tre de nos Guides verts). L'essor de la description appara??t donc ??troitement li?? ?? l'expansion des sciences et des techniques.Perception du monde ext??rieur par la vue ; m??canisme physiologique par lequel les radiations lumineuses donnent naissance ?? des sensations visuelles.Vision nette, indistincte"}

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
          <div className="card  bg-base-100 glass h-2/5 ">
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
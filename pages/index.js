import Head from "next/head";
import Image from "next/image";
import avatar from "../styles/src/img/tungnoise.jpg";

export default function Home() {
  return (
    <div className="main-body">
      <div className=" flex justify-between w-full">
        <div></div>
        <div className="">
          <div className=" h-[68vh] min-w-[35vh] rounded-l-[100vh] m-2 mr-4 p-3 border-2 border-orange-300">
            <div className=" bg-pink-500  min-h-[60vh] mt-4 ml-2 max-w-[30vh] rounded-l-[100vh] z-[99] bg-cover bg-[url('https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/290184563_118413767561642_4631229608620407579_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=BKcoyLhX6s8AX8Cgd_T&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT9nfpYEWwEVhYXfQAl7kQ3s3eIAxZWOzujShql26wimhw&oe=62CAA9EA')] "></div>
          </div>
        </div>
      </div>
      <div id="intro" className="p-4">
        <p
          href=""
          className="  text-center font-robo text-xs font-bold text-orange-400"
        >
          SINCE 2022
        </p>
        <div className="font-pra text-[2rem] text-right">Le Anh Tung</div>
        <h2 className=" text-right font-thin">Front-end Developer</h2>
        <p className=" text-right font-corm">Self-taught</p>
      </div>
      <div className=" first-letter:text-7xl">
        Tung is a web developer using React/Next. I am an open-minded web
        developer whos ready for new challenges. I have almost 1000hours
        learning & 200 hours practicing.
      </div>
      <div className="bg-red-100 first-letter:text-7xl">
        Excepturi officia delectus voluptas enim cupiditate, ad dolores, maiores
        ipsum neque corrupti commodi at, assumenda exercitationem quibusdam quae
        minus corporis. Nemo possimus, incidunt aliquid consequuntur et quae.
      </div>
      <div id="project">
        A eveniet eligendi magni saepe libero recusandae placeat officia ipsum
        repudiandae vitae deleniti laborum corporis tempore nam amet delectus
        cum, voluptatum totam? Blanditiis facere ut fugit corrupti fugiat.
      </div>
      <div id="contact">
        Cumque cum repellat aperiam ullam nostrum minima commodi expedita error
        est consequuntur nam quo ad culpa accusantium omnis quia? Omnis error ad
        reprehenderit, accusantium sit natus vero!
      </div>
    </div>
  );
}

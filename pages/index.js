import Head from "next/head";
import Image from "next/image";
import NavMobile from "../components/nav/NavMobile";

export default function Home() {
  return (
    <div>
      <div className="bg-orange-500">
        <NavMobile />
      </div>
      <div id="nav-mobi" className="font-pra text-[2rem]">
        hi tung, this is hero cap.
      </div>
      <div className="bg-red-100">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
        officia delectus voluptas enim cupiditate, ad dolores, maiores ipsum
        neque corrupti commodi at, assumenda exercitationem quibusdam quae minus
        corporis. Nemo possimus, incidunt aliquid consequuntur et quae. A
        eveniet eligendi magni saepe libero recusandae placeat officia ipsum
        repudiandae vitae deleniti laborum corporis tempore nam amet delectus
        cum, voluptatum totam? Blanditiis facere ut fugit corrupti fugiat,
        cumque cum repellat aperiam ullam nostrum minima commodi expedita error
        est consequuntur nam quo ad culpa accusantium omnis quia? Omnis error ad
        reprehenderit, accusantium sit natus vero!
      </div>
    </div>
  );
}

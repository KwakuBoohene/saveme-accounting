import Layout from "../../components/general/Layout";
import Link from "next/link";
import FormControl from "../../components/general/FormControl";


export default function AddAsset(){
    return(
        <div className="container">
            <div className="between px-6">
                <Link
                href='/assets'>
                    <a className="font-bold text-green-primary
                    hover:text-green-secondary hover:underline
                    transition-all duration-300">Go Back</a>    
                </Link>

                
            </div>
            <div className="center my-3">
                <div className="bg-green-primary w-5/12 px-5
                 py-6  shadow-lg">

                     <div className="font-bold
                      text-2xl text-white">
                       Create A New Asset
                     </div>
                    <FormControl type='text' placeholder='Name'/>
                    <FormControl type='text' placeholder='Type'/>
                    <FormControl type='text' placeholder='Amount'/>
                    <FormControl type='text' placeholder='Currency'/>

                    <div className="my-4">
                        <button className="text-white
                        px-3 py-1 rounded-lg hover:bg-green-secondary
                        font-bold transition-all duration-300
                         bg-green-tertiary">
                        Add Assets
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

AddAsset.getLayout = Layout
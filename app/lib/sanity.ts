import {createClient} from "next-sanity";
import imageurlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId:"ot0ejfbf",
    dataset:"production",
    apiVersion:"2022-03-25",
    useCdn:true,
});


const builder = imageurlBuilder(client);

export function urlFor(source:any){
    return builder.image(source);
}
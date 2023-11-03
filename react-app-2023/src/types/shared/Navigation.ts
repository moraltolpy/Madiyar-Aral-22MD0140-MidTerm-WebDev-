// @ts-ignore
class Navigation{
    Navigation(id:number,name:string,link:string){
        this.id=id;
        this.name=name;
        this.link=link;
    };
    id?:number;
    name?:string;
    link?:string;
    children?:Navigation[];
}
export default Navigation
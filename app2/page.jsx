import HomeCont from "../extensions/landing/intro/HomeCont";
import ServiceCont from "../extensions/landing/Service/ServiceCont";

 export default function Page(){
	return (
		<main className="lg:px-8 xl:px-16 2xl:px-32 " >
			<HomeCont />
			<ServiceCont />
		</main>
	)
}


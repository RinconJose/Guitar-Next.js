import Layout from "../components/Layout"
import Listado from "../components/Listado";

const Tienda = ({guitarras}) => {
	return (
		<Layout
			pagina='Tienda Virtul'
		>
			<main>
				<h1 className="heading">Nuestra colección</h1>
				<Listado 
					guitarras={guitarras}
				/>
			</main>
		</Layout>
	)
}

export async function getServerSideProps() {
	const url = `${process.env.API_URL}/guitarras?_sort=precio:desc`
	const respuesta = await fetch(url)
	const guitarras = await respuesta.json()

	return {
		props: {
			guitarras
		}
	}
}

export default Tienda
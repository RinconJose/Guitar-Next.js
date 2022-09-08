import Link from "next/link"
import Image from 'next/image'
import style from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
        <div className="contenedor">
            <div className={style.barra}>
                <Link href="/">
                    <a>
                        <Image width={400} height={100} src="/img/logo.svg" alt="Imagen logo"/>
                    </a>
                </Link>
                <nav className={style.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/tienda">Tienda</Link>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header
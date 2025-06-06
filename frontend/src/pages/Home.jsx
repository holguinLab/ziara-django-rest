export function Home() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[90vh]">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3"
                        alt="Barbería moderna"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
                        Estilo y Tradición<br />para el Hombre Moderno
                    </h1>
                    <p className="mt-6 max-w-lg text-xl text-gray-300">
                        Expertos en el arte del cuidado masculino. Más de 10 años creando looks únicos y memorables.
                    </p>
                    <div className="mt-10 flex gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-amber-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                        >
                            Reservar Cita
                        </a>
                        <a
                            href="#"
                            className="rounded-md bg-white/10 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-white/20"
                        >
                            Ver Servicios
                        </a>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Nuestros Servicios
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            Descubre nuestra amplia gama de servicios profesionales
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Service Card 1 */}
                        <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105">
                            <div className="aspect-w-3 aspect-h-2">
                                <img
                                    src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3"
                                    alt="Corte de cabello"
                                    className="h-64 w-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent" />
                            <div className="absolute bottom-0 p-6">
                                <h3 className="text-xl font-semibold text-white">Corte de Cabello</h3>
                                <p className="mt-2 text-sm text-gray-300">Desde €25</p>
                            </div>
                        </div>

                        {/* Service Card 2 */}
                        <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105">
                            <div className="aspect-w-3 aspect-h-2">
                                <img
                                    src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3"
                                    alt="Afeitado clásico"
                                    className="h-64 w-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent" />
                            <div className="absolute bottom-0 p-6">
                                <h3 className="text-xl font-semibold text-white">Afeitado Clásico</h3>
                                <p className="mt-2 text-sm text-gray-300">Desde €30</p>
                            </div>
                        </div>

                        {/* Service Card 3 */}
                        <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105">
                            <div className="aspect-w-3 aspect-h-2">
                                <img
                                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3"
                                    alt="Arreglo de barba"
                                    className="h-64 w-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent" />
                            <div className="absolute bottom-0 p-6">
                                <h3 className="text-xl font-semibold text-white">Arreglo de Barba</h3>
                                <p className="mt-2 text-sm text-gray-300">Desde €20</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                ¿Por qué elegirnos?
                            </h2>
                            <p className="mt-4 text-lg text-gray-600">
                                En BarberStyle nos dedicamos a ofrecer la mejor experiencia en cuidado personal masculino.
                            </p>
                            <div className="mt-8 space-y-8">
                                <div className="flex gap-x-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-600">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Barberos Expertos</h3>
                                        <p className="mt-2 text-gray-600">Nuestro equipo cuenta con años de experiencia y formación continua.</p>
                                    </div>
                                </div>
                                <div className="flex gap-x-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-600">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Productos Premium</h3>
                                        <p className="mt-2 text-gray-600">Utilizamos solo los mejores productos para el cuidado de tu cabello y barba.</p>
                                    </div>
                                </div>
                                <div className="flex gap-x-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-600">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Ambiente Exclusivo</h3>
                                        <p className="mt-2 text-gray-600">Un espacio diseñado para tu comodidad y relajación.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3"
                                alt="Interior de la barbería"
                                className="rounded-2xl object-cover h-full w-full shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Lo que dicen nuestros clientes
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            Descubre por qué somos la barbería preferida en la ciudad
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Testimonial 1 */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <div className="flex items-center gap-x-4 mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
                                    alt="Cliente"
                                    className="h-12 w-12 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Carlos R.</h3>
                                    <p className="text-sm text-gray-600">Cliente desde 2020</p>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                "El mejor servicio que he recibido. Los barberos son verdaderos profesionales y el ambiente es inmejorable."
                            </p>
                            <div className="mt-4 flex text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <div className="flex items-center gap-x-4 mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3"
                                    alt="Cliente"
                                    className="h-12 w-12 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Miguel A.</h3>
                                    <p className="text-sm text-gray-600">Cliente desde 2021</p>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                "Excelente atención y resultados. Siempre salgo satisfecho con mi corte y el trato es excepcional."
                            </p>
                            <div className="mt-4 flex text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <div className="flex items-center gap-x-4 mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
                                    alt="Cliente"
                                    className="h-12 w-12 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">David L.</h3>
                                    <p className="text-sm text-gray-600">Cliente desde 2019</p>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                "Los mejores profesionales de la ciudad. El ambiente es muy agradable y los resultados son siempre perfectos."
                            </p>
                            <div className="mt-4 flex text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative isolate bg-gray-900">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            ¿Listo para renovar tu imagen?
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                            Reserva tu cita ahora y déjanos crear el look que siempre has deseado
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-amber-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                            >
                                Reservar Ahora
                            </a>
                            <a href="#" className="text-lg font-semibold leading-6 text-white">
                                Ver Precios <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 -top-16 -z-10 transform-gpu overflow-hidden blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-amber-600 to-amber-800 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
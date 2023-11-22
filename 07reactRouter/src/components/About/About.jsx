import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-12 lg:items-center lg:gap-12">
                    <div className="md:w-1/2 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                            className="w-full h-auto rounded-md shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 lg:w-6/12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

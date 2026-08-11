import React from 'react';

const PageContainer = ({children,className=""}) => {
    return (
        <section className={`min-h-screen w-full ${className}`}>
            <div className=" px-4 sm:px-6 lg:px-8 py-12">{children}</div>
        </section>
    );
};

export default  PageContainer ;
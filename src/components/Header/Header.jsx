import profile from '../../assets/images/profile.png'

const header = () => {
    return (
        <header className='flex justify-between items-center mx-4 p-4 border-b-2 max-w-6xl mx-auto'>
           <h1 className="text-4xl">knowledhge cafe</h1> 
         <img src={profile} alt="" />
        </header>
    );
};

export default header;
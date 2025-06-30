const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-slate-800">
      <div className="w-full mx-auto px-4 py-6">
        <div className="text-center text-slate-400">
          <p className="flex items-center justify-center gap-2 text-sm">
            © {currentYear} • Made with 
          <img className='w-5 h-5' src="https://img.icons8.com/?size=100&id=4T5VAk5CB92r&format=png&color=000000" alt="heart" />
            by Hritik Kumar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
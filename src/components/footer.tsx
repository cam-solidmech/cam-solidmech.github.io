import * as React from "react"

const Footer = () => {
 return (
    <>
       <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} built by <a href="https://khivi.com">khivi</a>
</p>
        </div>
    </>
  );
};

export default Footer;;

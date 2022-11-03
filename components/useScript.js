
export default function useScript(url)  {
 
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
   
  ;
};

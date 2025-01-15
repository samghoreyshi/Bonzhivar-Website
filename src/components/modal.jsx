const Modal = ({ isOpen, onClose, title, description, imageUrl }) => {
  return (
    <>
      {/* Modal Overlay and Content */}
      <div
        id="modal"
        className="fixed inset-0 invisible opacity-0 z-10 flex items-center justify-center transition-opacity duration-300 target:visible target:opacity-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Click Outside to Close Modal */}
        <a href="" className="fixed inset-0 bg-black/50 backdrop-blur-xl" aria-hidden="true"></a>

        {/* Modal Card */}
        <div className="relative z-[1000] bg-background border-2 border-accent rounded-lg shadow-lg p-6 max-w-md mx-auto transform scale-90 opacity-100 transition-transform duration-300 target:scale-100 target:opacity-100">
          <h3
            className="font-IranYekan font-bold text-right text-2xl leading-6 text-accentDark my-5"
            id="modal-title"
          >
            وبسایت بن‌ژیوار
          </h3>
          <p className="font-IranYekan font-medium direction-rtl text-right mt-2 text-base text-gray-500 my-10">
            وبسایت بن‌ژیوار در حال توسعه است برخی صفحات وبسایت در حال ساخت هستند
            و بعضی قابلیت های وبسایت ممکن است با اختلال مواجه شود تا توسعه کامل
            وبسایت از صبر و شکیبایی شما متشکریم.
          </p>
          <div className="mt-5 sm:mt-4 flex flex-col sm:flex-row sm:justify-end">
            <a
              href=""
              className="font-IranYekan font-bold inline-flex justify-center rounded-md border border-transparent bg-accent px-4 py-2 text-sm direction-rtl text-accentLight shadow-sm hover:bg-accentDark focus:outline-none focus:ring-2 focus:ring-accentDark focus:ring-offset-2 sm:ml-3 sm:w-auto transition-all duration-300 ease-in-out"
            >
              متوجه شدم!
            </a>
            {/* <a
              href=""
              className="mt-3 inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto"
            >
              Cancel
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

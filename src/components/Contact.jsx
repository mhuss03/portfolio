function Contact() {
  return (
    <>
      <div
        className="mx-auto mb-40 flex w-full flex-wrap justify-center font-serif"
        id="contact-id"
      >
        <h2 className="size mb-8 w-full text-center text-6xl font-bold text-white">
          Contact
        </h2>
        <form className="flex flex-col border-2 border-white bg-primary px-12 py-6 text-white">
          <input
            className="contact-input"
            type="text"
            id="name"
            placeholder="Full name"
            autoComplete="off"
            maxLength={30}
          />
          <input
            className="contact-input"
            type="text"
            id="email"
            placeholder="E-mail"
            autoComplete="off"
            maxLength={25}
          />
          <textarea
            className="contact-input h-32 resize-none pt-2"
            name=""
            id="message"
            cols="30"
            rows="1"
            placeholder="Message"
            autoComplete="off"
            maxLength={200}
          ></textarea>
          <button className="rounded-lg bg-accent p-2 text-white transition-all hover:bg-stone-200 hover:text-primary">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;

import FAQScreen from "../src/screens/FAQScreen";

export default FAQScreen;

// SSG - static site generation
// SSR - server side rendering
// ISG - incremental static generation

/**
 * Em modo DEV, sempre roda! a cada acesso
 * Em build roda a cada acesso que vc recebe
 */
// export async function getServerSideProps() {

/**
 * Em modo DEV, sempre roda! a cada acesso
 * Em build roda somente em build time
 */
export async function getStaticProps() {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(FAQ_API_URL)
    .then((respostaServidor) => {
      return respostaServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });
  return {
    props: { faq },
  };
}

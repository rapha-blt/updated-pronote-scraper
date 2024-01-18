const { chromium } = require('playwright');
require('dotenv').config();

const entLink = process.env.ENT_LINK;
const userName = process.env.USERNAME;
const password = process.env.PASSWORD;

//Créez un fichier .env et définissez ces valeurs de la façon suivante :
//ENT_LINK=https://... (votre lien ent pour accéder à pronote)
//USERNAME= (votre nom d'utilisateur d'accès)
//PASSWORD= (votre mot de passe d'accès)

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Naviguer vers la page de connexion ENT
  await page.goto(entLink);

  // Remplir les champs de connexion
  await page.fill('#email', userName);
  await page.fill('#password', password);

  // Soumettre le formulaire de connexion
  await page.click('button.flex-magnet-bottom-right');
  
  await page.waitForSelector('.travailafaire');

  // Localiser le bouton Notes de la navbar

  const navbarButtonLocator = page.locator('xpath=/html/body/div[4]/div[1]/div[1]/div/div[3]/div[1]/div[3]/ul/li[3]/div[1]');
  await navbarButtonLocator.waitFor();

  // Cliquer sur l'élément.
  await navbarButtonLocator.click();

  // Attendre que la page se charge
  
  await page.waitForSelector('.liste_celluleGrid');

  // Basculer sur la section par matière pour afficher les moyennes

  const parMatiereLocator = page.locator('div.element-bandeau-wrapper label:has-text("Par matière")');
  await parMatiereLocator.click();

  // Attendre que la page se charge

  await page.waitForSelector('.liste_contenu_ligne');

  // Optionnel : Prendre une capture d'écran de la page pour debug

  await page.screenshot({ path: 'screenshot.png' });

  // Récupérer tout le contenu de la partie moyenne

  const moyennes = await page.textContent('.total-content');

  // Utilisation d'un regex simple pour isoler les valeurs des moyennes et les enregistrer dans des variables

  let moyEleveMatch = moyennes.match(/Moyenne générale élève : (\d+,\d+)/);
  
  let moyClasseMatch = moyennes.match(/Moyenne générale classe : (\d+,\d+)/);

  let moyEleve = moyEleveMatch ? moyEleveMatch[1].replace(',', '.') : null;
  let moyClasse = moyClasseMatch ? moyClasseMatch[1].replace(',', '.') : null;

  //Affichage dans la console

  console.log(`Moyenne générale élève: ${moyEleve}`);
  console.log(`Moyenne générale classe: ${moyClasse}`);

  await browser.close();
})();

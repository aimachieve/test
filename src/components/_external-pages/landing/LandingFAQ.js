// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  margin: theme.spacing(8, 0, 8, 0),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0
  }
}));
// ----------------------------------------------------------------------

export default function LandingFAQ() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Typography variant="h3" sx={{ mb: 3, fontFamily: 'Poppins', color: "#1FA0F4", textAlign: "center" }}>
              Common Question
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontWeight: 'bold' }}>What is Blockchain?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Blockchain é uma tecnologia de base de dados distribuída e descentralizada, onde as informações são replicadas nos milhares de nós da rede e não podem ser alteradas. Nesta tecnologia, a integridade se dá usando uma técnica de encadeamento de bloco de dados, ligando o bloco anterior ao próximo bloco, e usando uma assinatura hash do bloco anterior como um dado do próximo bloco.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography sx={{ fontWeight: 'bold' }}>What is "hash"?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Hash is the result of a cryptographic function, a mathematical algorithm that maps a file generating a “signature” that identifies this file. Any change to the file implies changing its hash. <br />
                  This is a one-way function, that is, a function for which you cannot invert or reverse the calculation.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography sx={{ fontWeight: 'bold' }}>What can be registered in Registro.Legal?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Technically and operationally, any file that contains information that in the future you may have to prove was yours, that you created it. In short, that you may have to prove the precedence of what is reported in the file.
                  <br />
                  The range of applications since registration is very wide, but here are some of them:
                  <br />
                  In the area of ​​patents . Often, for reasons of cost, we register only the main patent, but several elements should also be registered and we do not do so because of a very high cost. With the registration of these parts in blockchain you will be able to prove the precedence of an invention, of a patentable structure.
                  <br />
                  Security in creating systems . You will be able to register the source code and the interfaces of your systems or part of them, being able to later prove your authorship.
                  <br />
                  In the area of ​​fashion and jewelry . The creation of the specific prints and cuts of the collections, as well as the jewelry design, can be registered in order to prove the precedence of the creation.
                  <br />
                  Books and eBooks can also be registered, and we don't have to wait to finish them before registering. We can make partial records of versions.
                  <br />
                  Speeches, theses, dissertations, to be able to easily prove plagiarism.
                  <br />
                  Advertising expressions . The INPI no longer allows the registration of advertising expressions, in this way, proof of prior art can be guaranteed from a blockchain record.
                  <br />
                  Music and lyrics . How often do we see cases of accusations of plagiarism. Ensure your proof of precedence with blockchain registration.
                  <br />
                  Photos and illustrations . There is no shortage of cases of misuse of images belonging to third parties.
                  <br />
                  Architecture projects. That project you spent months working on, how do you prove it's yours if someone takes it and applies it to other projects without your approval?
                  <br />
                  Minutes and recordings of meetings. That meeting that you want to register for corporate or legal reasons, you can guarantee the integrity by registering on blockchain.
                  <br />
                  Finally, all types of documents that need to guarantee proof of the original or its precedence.
                  <br />
                  To learn more, visit the link: https://www.authoradigital.com.br/central-autoral/
                </Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Typography sx={{ fontWeight: 'bold' }}>What is the legal certainty of this registration?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Currently, more than 179 countries in the world accept this registration as proof of anteriority.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5a-content"
                id="panel5a-header"
              >
                <Typography sx={{ fontWeight: 'bold' }}>How are registrations billed?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The charge is made by credit. Each credit is equivalent to a record and as we have values ​​per usage range, the values ​​can be found in the system itself. Credits are purchased by credit card within the system itself.
                  <br />
                  <br />
                  For regular LDSOFT customers we have a differentiated table with discounts, which can also be consulted by the system. For these customers, our billing is monthly and not by credit card.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

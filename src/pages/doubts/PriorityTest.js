// material
import { styled } from '@material-ui/core/styles';
import { Button, Container, Typography, Grid, Stack } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../components/animate';
import { Icon } from '@iconify/react';
import checkmarkCircle2Fill from '@iconify/icons-eva/checkmark-outline';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  margin: theme.spacing(20, 0, 8, 0),
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

export default function LandingHugeAbout() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Typography>
              Every day, the judiciary opens more doors to the digital age: the modernization of justice is an agenda for the present, no longer for the future.
              <br />
              <br />
              In Brazil, this validity derives from Provisional Measure 2200-2/2001, which establishes the criteria for proof of authorship and integrity of documents in electronic media. Judges are already aware of the security and legal validity of the use of blockchain for cases of prior evidence due to the guarantee of inalterability of the record, which guarantees high-level digital security already recognized by Brazilian legislation and by WIPO in more than 179 countries. Our digital file authentication platform uses Ethereum Classic, one of the most secure and advanced Blockchain networks today, and provides an easy and fast way to protect intellectual productions.
              <br />
              <br />
              Below on this same page, you will find information and laws regarding various copyright legislation.
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp} style={{ marginTop: '50px' }}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6} mb={10}>
                <img src='https://www.authoradigital.com.br/wp-content/uploads/2022/04/certificado-authoradigital-direito-autoral-768x475.jpg' alt="certificate" />
              </Grid>
              <Grid item xs={12} md={6} mb={10}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: "#1FA0F4", marginBottom: '20px' }}>The certificate</Typography>
                <Typography>
                  Registro.Legal, in addition to facilitating the entire registration process of proof of prior art for your digital files on the Blockchain network, also issues a Certificate of Priority. It contains all the most important data related to the transaction: the hash of the digital file (unique and exclusive code generated for each file), timestamp stamp (exact date and time of registration), data of the person in charge and the QR code of the transaction for public consultation. This data serves to allow the verification, existence and authenticity of your digital content and direct validation on the network.
                </Typography>
              </Grid>
            </Grid>
          </MotionInView>

          <MotionInView variants={varFadeInUp} style={{ marginTop: '50px' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: "#1FA0F4", marginBottom: '20px' }}>
              Law No. 9.610/98 - Copyright
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
              LAW No. 9.610, OF FEBRUARY 19, 1998
              <br />
              Amends, updates and consolidates copyright legislation and other provisions
            </Typography>
            <Typography>
              The President of the Republic
              I make it known that the National Congress decrees and I sanction the following Law:
            </Typography>

            {/* Title I */}
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: "#1FA0F4", marginTop: '20px', marginBottom: '10px' }}>
              TITLE I
              <br />
              Preliminary Provisions
            </Typography>
            <Typography>
              Art. 1° This Law regulates the copyright, under this denomination the author's rights and those related to it are understood.
              <br /><br />
              Art. 2nd Foreigners domiciled abroad will enjoy the protection guaranteed in the agreements, conventions and treaties in force in Brazil.
              <br /><br />
              Single paragraph. The provisions of this Law apply to nationals or persons domiciled in a country that assures Brazilians or persons domiciled in Brazil reciprocity in the protection of copyright or equivalent.
              <br /><br />
              Art. 3° Copyrights are considered, for legal purposes, to be movable assets.
              <br /><br />
              Art. 4° Legal transactions on copyrights are interpreted restrictively.
              <br /><br />
              Art. 5 For the purposes of this Law, it is considered:
              <br /><br />
              I – publication – the offering of a literary, artistic or scientific work to the public, with the consent of the author, or any other holder of copyright, in any form or process;
              <br /><br />
              II – transmission or emission – the diffusion of sounds or sounds and images, by means of radio waves; satellite signals; wire, cable or other conductor; optical means or any other electromagnetic process;
              <br /><br />
              III – retransmission – the simultaneous issuance of the transmission of one company by another;
              <br /><br />
              IV – distribution – making available to the public the original or copy of literary, artistic or scientific works, interpretations or fixed performances and phonograms, through the sale, lease or any other form of transfer of ownership or possession;
              <br /><br />
              V – communication to the public – act by which the work is made available to the public, by any means or procedure and which does not consist in the distribution of copies;
              <br /><br />
              VI – reproduction – the copy of one or several copies of a literary, artistic or scientific work or of a phonogram, in any tangible form, including any permanent or temporary storage by electronic means or any other means of fixation that may be developed;
              <br /><br />
              VII – counterfeiting – unauthorized reproduction;
              <br /><br />
              VIII - work:
              <br /><br />
              a) in co-authorship – when it is created in common, by two or more authors;
              <br /><br />
              b) anonymous – when the author's name is not indicated, by his will or because he is unknown;
              <br /><br />
              c) pseudonym – when the author hides himself under an assumed name;
              <br /><br />
              d) unpublished – one that has not been published;
              <br /><br />
              e) posthumous – published after the author's death;
              <br /><br />
              f) original – the first creation;
              <br /><br />
              g) derivative – that which, constituting a new intellectual creation, results from the transformation of an original work;
              <br /><br />
              h) collective – created on the initiative, organization and responsibility of an individual or legal entity, who publishes it under their name or brand and which is constituted by the participation of different authors, whose contributions merge into an autonomous creation;
              <br /><br />
              i) audiovisual – the one that results from the fixation of images with or without sound, which has the purpose of creating, through their reproduction, the impression of movement, regardless of the processes of their capture, of the support used initially or later to fix them. it, as well as the means used for its publication;
              <br /><br />
              IX – phonogram – any fixation of sounds of a performance or interpretation or of other sounds, or of a representation of sounds that is not a fixation included in an audiovisual work;
              <br /><br />
              X – publisher – the individual or legal entity to whom the exclusive right to reproduce the work and the duty to disseminate it is attributed, within the limits provided for in the publishing contract;
              <br /><br />
              XI – producer – the individual or legal entity that takes the initiative and has the economic responsibility for the first fixation of the phonogram or audiovisual work, whatever the nature of the support used;
              <br /><br />
              XII – broadcasting – the wireless transmission, including by satellites, of sounds or images and sounds or their representations, for reception to the public and the transmission of coded signals, when the means of decoding are offered to the public by the broadcasting organization or with your consent;
              <br /><br />
              XIII - performers or performers - all actors, singers, musicians, dancers or other people who play a role, sing, recite, declaim, interpret or perform in any form literary or artistic works or expressions of folklore.
              Art. 6. The works simply subsidized by them will not be in the public domain of the Union, the States, the Federal District or the Municipalities.
            </Typography>

            {/* Title II */}
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: "#1FA0F4", marginTop: '20px', marginBottom: '10px' }}>
              TITLE II
              <br />
              Intellectual Works
            </Typography>
            {/* Chapter I */}
            <Typography sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
              CHAPTER I
              <br />
              Protected Works
            </Typography>

            <Typography>
              Art. 7° Protected intellectual works are creations of the spirit, expressed by any means or fixed in any support, tangible or intangible, known or invented in the future, such as:
              <br /><br />
              I – the texts of literary, artistic or scientific works;
              <br /><br />
              II – conferences, allocutions, sermons and other works of the same nature;
              <br /><br />
              III – dramatic and dramatic-musical works;
              <br /><br />
              IV – choreographic and pantomime works, whose scenic performance is fixed in writing or in any other way;
              <br /><br />
              V – musical compositions, whether or not they have lyrics;
              <br /><br />
              VI – audiovisual works, with or without sound, including cinematographic works;
              <br /><br />
              VII – photographic works and those produced by any process similar to photography;
              <br /><br />
              VIII – works of drawing, painting, engraving, sculpture, lithography and kinetic art;
              <br /><br />
              IX – illustrations, geographical maps and other works of the same nature;
              <br /><br />
              X – projects, sketches and plastic works concerning geography, engineering, topography, architecture, landscaping, scenography and science;
              <br /><br />
              XI – adaptations, translations and other transformations of original works, presented as a new intellectual creation;
              <br /><br />
              XII – computer programs;
              <br /><br />
              XIII – collections or compilations, anthologies, encyclopedias, dictionaries, databases and other works, which, due to their selection, organization or arrangement of content, constitute an intellectual creation.
              <br /><br />
              § 1 Computer programs are subject to specific legislation, in compliance with the provisions of this Law that are applicable to them.
              <br /><br />
              § 2° The protection granted in item XIII does not encompass the data or materials themselves and is understood without prejudice to any copyrights that subsist with respect to the data or materials contained in the works.
              <br /><br />
              § 3° In the field of sciences, the protection will fall on the literary or artistic form, not covering its scientific or technical content, without prejudice to the rights that protect the other fields of intangible property.
              <br /><br />
              Art. 8 The following are not protected as copyrights dealt with in this Law:
              <br /><br />
              I – the ideas, normative procedures, systems, methods, projects or mathematical concepts as such;
              <br /><br />
              II – the schemes, plans or rules to carry out mental acts, games or businesses;
              <br /><br />
              III – blank forms to be filled in for any type of information, scientific or not, and their instructions;
              <br /><br />
              IV – the texts of treaties or conventions, laws, decrees, regulations, judicial decisions and other official acts;
              <br /><br />
              V – information in common use such as calendars, agendas, registrations or captions;
              <br /><br />
              VI – individual names and titles;
              <br /><br />
              VII – the industrial or commercial use of the ideas contained in the works.
              <br /><br />
              Art. 9° A copy of a work of plastic art made by the author himself is guaranteed the same protection enjoyed by the original.
              <br /><br />
              Art. 10. The protection of the intellectual work covers its title, if original and unmistakable with that of a work of the same genre, previously published by another author.
              Single paragraph. The title of periodical publications, including newspapers, is protected for up to one year after the publication of their last issue, unless they were annual, in which case this period will increase to two years.
            </Typography>
            {/* Chapter II */}
            <Typography sx={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '10px' }}>
              CHAPTER II
              <br />
              Authorship of Intellectual Works
            </Typography>

            <Typography>
              Art. 11. Author is the natural person who creates a literary, artistic or scientific work.
              Single paragraph. The protection granted to the author may apply to legal entities in the cases provided for in this Law.
              <br /><br />
              Art. 12. To identify himself as an author, the creator of the literary, artistic or scientific work may use his civil name, complete or abbreviated even by his initials, a pseudonym or any other conventional sign.
              <br /><br />
              Art. 13. If there is no evidence to the contrary, the author of the intellectual work is considered to be the one who, by one of the identification modalities referred to in the previous article, has, in accordance with the use, indicated or announced that quality in its use.
              <br /><br />
              Art. 14. Whoever adapts, translates, arranges or orchestrates a work that is in the public domain is the owner of copyright, and cannot oppose any other adaptation, arrangement, orchestration or translation, unless it is a copy of his own.
              <br /><br />
              Art. 15. Co-authorship of the work is attributed to those in whose name, pseudonym or conventional sign it is used.
              <br /><br />
              § 1° It is not considered co-author who simply helped the author in the production of the literary, artistic or scientific work, reviewing it, updating it, as well as supervising or directing its edition or presentation by any means.
              <br /><br />
              § 2. The co-author, whose contribution can be used separately, are assured all the faculties inherent to its creation as an individual work, being prohibited, however, the use that may cause damage to the exploitation of the common work.
              <br /><br />
              Art. 16. The author of the literary, musical or literary-musical subject or argument and the director are co-authors of the audiovisual work.
              <br /><br />
              Single paragraph. Co-authors of cartoons are considered to be those who create the drawings used in the audiovisual work.
              <br /><br />
              Art. 17. Protection of individual participations in collective works is ensured.
              <br /><br />
              § 1° Any of the participants, in the exercise of their moral rights, may prohibit their name from being indicated or announced in the collective work, without prejudice to the right to have the contracted remuneration.
              <br /><br />
              § 2° It is up to the organizer to own the patrimonial rights over the collective work as a whole.
              <br /><br />
              § 3 The contract with the organizer will specify the participant's contribution, the deadline for delivery or performance, the remuneration and other conditions for its execution.
            </Typography>
            {/* Chapter II */}
            <Typography sx={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '10px' }}>
              CHAPTER III
              <br />
              Registration of Intellectual Works
            </Typography>

            <Typography>
              Art. 18. The protection of the rights dealt with in this Law does not depend on registration.
              <br /><br />
              Art. 19. The author is allowed to register his work in the public body defined in the  caput  and in § 1 of art. 17 of Law No. 5,988, of December 14, 1973.
              <br /><br />
              Law No. 5,988, of December 14, 1973
              Art. 17. For the security of their rights, the author of the intellectual work may register it, according to its nature, at the National Library, at the School of Music, at the School of Fine Arts of the Federal University of Rio de Janeiro, at the National Institute of Cinema, or at the Federal Council of Engineering, Architecture and Agronomy.
              § 1 If the work is of a nature that involves registration in more than one of these bodies, it must be registered in the one with which it has the greatest affinity.
              <br /><br />
              Art. 20. For the registration services provided for in this Law, a fee will be charged, the value of which and the collection process will be established by an act of the holder of the federal public administration body to which the registration of intellectual works is linked.
              <br /><br />
              Art. 21. The registration services referred to in this Law will be organized in accordance with § 2 of art. 17 of Law No. 5,988, of December 14, 1973.
              <br /><br />
              Law No. 5,988, of December 14, 1973
              Art. 17.
              § 2 The Executive Power, by means of a Decree, may, at any time, reorganize the registry services, granting to other Bodies the attributions referred to in this article.
            </Typography>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

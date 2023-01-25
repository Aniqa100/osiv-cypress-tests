//https://osiv.testrail.net/index.php?/cases/view/39770
//FINISHED
import utility           from "../support/utility";
import desktop           from "../support/page_objects/Desktop";
import loginPage         from "../support/page_objects/LoginPage";
import vpGrid            from "../support/page_objects/VPGrid";
import vpDetails         from "../support/page_objects/VPDetails";
import dashboard         from "../support/page_objects/Dashboard";
import vpEntscheidGrid   from "../support/page_objects/VPEntscheidGrid";
import entscheidNew      from "../support/page_objects/EntscheidNew";
import entscheidDetails  from "../support/page_objects/EntscheidDetails";
import entscheidMetaInfo from "../support/page_objects/EntscheidMetaInfo";

const url  = utility.getBaseUrl();
const file = utility.Entscheidrequest();

describe( `Test to copy Entscheid with all data ${  url}`, () => {

  beforeEach( "Login", () => {
    cy.UILoginWithSession( Cypress.env( "username" ), Cypress.env( "password" ) );
    loginPage.open( url );
  } );

  it( "Open Entscheid and copy", () => {
    desktop.Versicherte().click();
    vpGrid.typevpName( "Wait Will" ).type( "{enter}" );
    vpGrid.vpSelectedRow().trigger( "dblclick" );
    //Here until I don't know how to handle a new opened tab I put chain cy.wait -> homeBtn -> cy.wait
    cy.wait( 3000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    vpDetails.Entscheide().click();
    vpEntscheidGrid.findTableRowbyText( "Test notes on copy" ).click();
    vpEntscheidGrid.CopyBtn().click();
    entscheidNew.ValidateLeistungsgruppeValue( "ABM" );
    entscheidNew.ValidateLeistungscodeValue( "281 - (N) Gutachten SAHB Prothetik/Orthetik" );
    entscheidNew.ValidateGesuchValue( "vom 01.02.2022" );
    entscheidNew.ValidateEreignisValue( "Basis vom 22.11.2022" );
    entscheidNew.ValidateBereichValue( "IV" );
    entscheidNew.ValidateBearbeiterValue( "Hulk1 - Hulk Eins" );
    entscheidNew.ValidateArbeitslisteValue( "Neu" );
    entscheidNew.ValidateNotizenValue( "Test notes on copy" );
    entscheidNew.Notizen().clear().type( "Copied" );
    entscheidNew.ModatOkBtn().click();
    entscheidNew.ConfirmBtn().click();
    dashboard.HomeBtn().click();
    entscheidDetails.ValidateArbeitslisteValue( "Neu" );
    entscheidDetails.ValidateBearbeiterValue( "Hulk1 - Hulk Eins" );
    entscheidDetails.ValidateLeistungsgruppeValue( "ABM" );
    entscheidDetails.ValidateLeistungscodeValue( "281 - (N) Gutachten SAHB Prothetik/Orthetik" );
    entscheidDetails.ValidateGesuchValue( "vom 01.02.2022" );
    entscheidDetails.ValidateEreignisValue( "Basis vom 22.11.2022" );
    entscheidDetails.ValidateBereichValue( "IV" );
    entscheidDetails.ValidateNotizenValue( "Copied" );
    entscheidDetails.DurchführungsstellenTab().click();
    //Need to try finding more elegant way to make assertion in grid
    entscheidDetails.DurchführungsstellenList().eq( 1 ).invoke( "text" ).should( "contain", "Schaeppi Grundstücke per Adresse: Stamm Immobilien AG, Holbeinstrasse 75, 4002 Basel" );
    entscheidDetails.DurchführungsstellenList().eq( 2 ).invoke( "text" ).should( "contain", "Basler Orthopädie René Ruepp AG, Austrasse 109, 4051 Basel" );
    entscheidDetails.DurchführungsstellenList().eq( 3 ).invoke( "text" ).should( "contain", "Ergotherapie Rheinfelden, Petra Leisinger-Burns, Thermenstrasse 11, 4310 Rheinfelden" );
    entscheidDetails.VersicherungenTab().click();
    entscheidDetails.VersicherungenList( "MV" ).eq( 1 ).invoke( "text" ).should( "contain", "Personalfürsorgestiftung Grosspeter AG, St. Jakob-Strasse 72, 4132 Muttenz" );
    entscheidDetails.VersicherungenList( "UVG" ).eq( 2 ).invoke( "text" ).should( "contain", "Herr Dr. Peter Bont, Rechtsanwalt und Notar, Dornacherstrasse 26, Postfach, 4603 Olten" );
    // Over here I need to find EntscheidNM and save outside the test, I use settering gettering, to use it in futher in API call
    entscheidMetaInfo.MetaInfoTab().click();
    entscheidMetaInfo.SaveEntscheidIdNMtoGlobalValue();
    
  } );

  it( "Compare responses of copied Entscheid", () => {
    // Getting saved number form outside and putting it in url, sends an API call and gets the responce body
    cy.task( "getEntscheidIdNM" ).then( EntscheidIdNM => {
      console.log( EntscheidIdNM )
      console.log( `${url }`)
      console.log( `${ EntscheidIdNM }`)
      cy.request( `${url  }/web/Resource/Osiv.Entscheid.Entscheid.EntscheidBE?akQuery=%7B%22ui_context%22%3A%7B%22controlType%22%3A%22%22%2C%22container%22%3A%22%22%7D%2C%22filters%22%3A%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22entscheid_id%22%2C%22operator%22%3A%22eq%22%2C%22value%22%3A${ EntscheidIdNM }%7D%5D%7D%2C%22fieldlist%22%3A%22*%22%7D&clientRequestId=164&filter=%7B%22orderBy%22%3A%22Entscheid_ID%20descending%22%7D&_ts=166972068-6678884243-66` )
        .its( "body" )
        .then( body => {
          console.log( body )
          const resbody = body.dsEntscheid.eEntscheid[ 0 ];
          // Getting the body that was saved in fixture('CopiedinOsiv5') and compare values of both bodies key by key s I don't need to compare the whole bodies
          cy.fixture( file ).then( filebody => {
            const fixbody = filebody.dsEntscheid.eEntscheid[ 0 ];
            expect( fixbody.Ereignis_ID ).to.deep.eq( resbody.Ereignis_ID );
            expect( fixbody.Eingliederung_ID ).to.deep.eq( resbody.Eingliederung_ID );
            expect( fixbody.Stamm_ID ).to.deep.eq( resbody.Stamm_ID );
            expect( fixbody.Gesuch_ID ).to.deep.eq( resbody.Gesuch_ID );
            expect( fixbody.Eingl_Antrag_ID ).to.deep.eq( resbody.Eingl_Antrag_ID );
            expect( fixbody.Entscheidtyp_ID ).to.deep.eq( resbody.Entscheidtyp_ID );
            expect( fixbody.EntscheidtypBez ).to.deep.eq( resbody.EntscheidtypBez );
            expect( fixbody.Sprache_ID ).to.deep.eq( resbody.Sprache_ID );
            expect( fixbody.SpracheBez ).to.deep.eq( resbody.SpracheBez );
            expect( fixbody.Supertext_ID ).to.deep.eq( resbody.Supertext_ID );
            expect( fixbody.SupertextBez ).to.deep.eq( resbody.SupertextBez );
            // expect(fixbody.AK_ID).to.deep.eq(resbody.AK_ID)not equal ??
            expect( fixbody.Gebrechen_ID ).to.deep.eq( resbody.Gebrechen_ID );
            expect( fixbody.Funktausfall_ID ).to.deep.eq( resbody.Funktausfall_ID );
            expect( fixbody.Grundsatzentscheid ).to.deep.eq( resbody.Grundsatzentscheid );
            expect( fixbody.Leistung_ID ).to.deep.eq( resbody.Leistung_ID );
            expect( fixbody.Leistungsgruppe ).to.deep.eq( resbody.Leistungsgruppe );
            expect( fixbody.Massnahme ).to.deep.eq( resbody.Massnahme );
            expect( fixbody.Massnahme_Art_8a ).to.deep.eq( resbody.Massnahme_Art_8a );
            expect( fixbody.Ablehnungscode ).to.deep.eq( resbody.Ablehnungscode );
            expect( fixbody.AblehnungscodeBez ).to.deep.eq( resbody.AblehnungscodeBez );
            expect( fixbody.Beitragsart ).to.deep.eq( resbody.Beitragsart );
            //expect(fixbody.Ben_ID).to.deep.eq(resbody.Ben_ID) not equal
            expect( fixbody.Arbeitsliste ).to.deep.eq( resbody.Arbeitsliste );
            expect( fixbody.AL_Bevor_Abgabe ).to.deep.eq( resbody.AL_Bevor_Abgabe );
            expect( fixbody.Fach_Ben_ID ).to.deep.eq( resbody.Fach_Ben_ID );
            expect( fixbody.Zust_Ben_ID ).to.deep.eq( resbody.Zust_Ben_ID );
            expect( fixbody.Bearb_Status ).to.deep.eq( resbody.Bearb_Status );
            expect( fixbody.Fall_existiert ).to.deep.eq( resbody.Fall_existiert );
            expect( fixbody.Diskussion_Dat ).to.deep.eq( resbody.Diskussion_Dat );
            expect( fixbody.DZ_Arzt ).to.deep.eq( resbody.DZ_Arzt );
            expect( fixbody.DZ_Arzt_Ben_ID ).to.deep.eq( resbody.DZ_Arzt_Ben_ID );
            expect( fixbody.DZ_Arzt_Statistik ).to.deep.eq( resbody.DZ_Arzt_Statistik );
            expect( fixbody.DZ_Jur ).to.deep.eq( resbody.DZ_Jur );
            expect( fixbody.DZ_Jur_Ben_ID ).to.deep.eq( resbody.DZ_Jur_Ben_ID );
            expect( fixbody.DZ_Jur_Statistik ).to.deep.eq( resbody.DZ_Jur_Statistik );
            expect( fixbody.DZ_Sach ).to.deep.eq( resbody.DZ_Sach );
            expect( fixbody.DZ_Sach_Ben_ID ).to.deep.eq( resbody.DZ_Sach_Ben_ID );
            expect( fixbody.DZ_Sach_Statistik ).to.deep.eq( resbody.DZ_Sach_Statistik );
            expect( fixbody.DZ_Kad ).to.deep.eq( resbody.DZ_Kad );
            expect( fixbody.DZ_Kad_Ben_ID ).to.deep.eq( resbody.DZ_Kad_Ben_ID );
            expect( fixbody.DZ_Kad_Statistik ).to.deep.eq( resbody.DZ_Kad_Statistik );
            expect( fixbody.DZ_Dir ).to.deep.eq( resbody.DZ_Dir );
            expect( fixbody.DZ_Dir_Ben_ID ).to.deep.eq( resbody.DZ_Dir_Ben_ID );
            expect( fixbody.DZ_Dir_Statistik ).to.deep.eq( resbody.DZ_Dir_Statistik );
            expect( fixbody.Revision ).to.deep.eq( resbody.Revision );
            expect( fixbody.Revisionsart ).to.deep.eq( resbody.Revisionsart );
            expect( fixbody.Entscheid ).to.deep.eq( resbody.Entscheid );
            expect( fixbody.Erhalten ).to.deep.eq( resbody.Erhalten );
            expect( fixbody.Bereich ).to.deep.eq( resbody.Bereich );
            expect( fixbody.Beschluss_Dat ).to.deep.eq( resbody.Beschluss_Dat );
            expect( fixbody.BG_Volltext_ID ).to.deep.eq( resbody.BG_Volltext_ID );
            expect( fixbody.GG_Volltext_ID ).to.deep.eq( resbody.GG_Volltext_ID );
            expect( fixbody.VM_Versand_Dat ).to.deep.eq( resbody.VM_Versand_Dat );
            expect( fixbody.VM_Volltext_ID ).to.deep.eq( resbody.VM_Volltext_ID );
            expect( fixbody.MB_Versand_Dat ).to.deep.eq( resbody.MB_Versand_Dat );
            expect( fixbody.MB_Volltext_ID ).to.deep.eq( resbody.MB_Volltext_ID );
            expect( fixbody.VB_Versand_Dat ).to.deep.eq( resbody.VB_Versand_Dat );
            expect( fixbody.VB_Volltext_ID ).to.deep.eq( resbody.VB_Volltext_ID );
            expect( fixbody.VB_Frist_Protokoll ).to.deep.eq( resbody.VB_Frist_Protokoll );
            expect( fixbody.Sendungen_kreiert ).to.deep.eq( resbody.Sendungen_kreiert );
            expect( fixbody.VisumBearbeiter ).to.deep.eq( resbody.VisumBearbeiter );
            expect( fixbody.Visum_Ben_ID ).to.deep.eq( resbody.Visum_Ben_ID );
            expect( fixbody.Visum_Dat ).to.deep.eq( resbody.Visum_Dat );
            expect( fixbody.ErstVisumBearbeiter ).to.deep.eq( resbody.ErstVisumBearbeiter );
            expect( fixbody.Erstvisum_Ben_ID ).to.deep.eq( resbody.Erstvisum_Ben_ID );
            expect( fixbody.Erstvisum_Dat ).to.deep.eq( resbody.Erstvisum_Dat );
            expect( fixbody.ZAS_Mutiert_Dat ).to.deep.eq( resbody.ZAS_Mutiert_Dat );
            expect( fixbody.ZAS_Melde_Fehler ).to.deep.eq( resbody.ZAS_Melde_Fehler );
            expect( fixbody.ZAS_Gemeldet ).to.deep.eq( resbody.ZAS_Gemeldet );
            expect( fixbody.ZAS_Ungueltig_Gemeldet ).to.deep.eq( resbody.ZAS_Ungueltig_Gemeldet );
            expect( fixbody.ZAS_Melde_Dat ).to.deep.eq( resbody.ZAS_Melde_Dat );
            expect( fixbody.Verfuegungsnummer ).to.deep.eq( resbody.Verfuegungsnummer );
            expect( fixbody.Himi_Bez ).to.deep.eq( resbody.Himi_Bez );
            expect( fixbody.Himi_Keine_Rueckgabe ).to.deep.eq( resbody.Himi_Keine_Rueckgabe );
            expect( fixbody.Himi_Rueckgabe_Dat ).to.deep.eq( resbody.Himi_Rueckgabe_Dat );
            expect( fixbody.Himi_Text ).to.deep.eq( resbody.Himi_Text );
            expect( fixbody.RE_Verfahren ).to.deep.eq( resbody.RE_Verfahren );
            expect( fixbody.RE_AU_Grenzgrad ).to.deep.eq( resbody.RE_AU_Grenzgrad );
            expect( fixbody.RE_AU_Dauer ).to.deep.eq( resbody.RE_AU_Dauer );
            expect( fixbody.RE_AU_Grad_DS ).to.deep.eq( resbody.RE_AU_Grad_DS );
            expect( fixbody.RE_Ablauf_WF ).to.deep.eq( resbody.RE_Ablauf_WF );
            expect( fixbody.RE_Versp_Anmeldung ).to.deep.eq( resbody.RE_Versp_Anmeldung );
            expect( fixbody.RE_AU_Grad ).to.deep.eq( resbody.RE_AU_Grad );
            expect( fixbody.RE_AU_Rente ).to.deep.eq( resbody.RE_AU_Rente );
            expect( fixbody.RE_Sistierung_Dat ).to.deep.eq( resbody.RE_Sistierung_Dat );
            expect( fixbody.RE_Kuerzung ).to.deep.eq( resbody.RE_Kuerzung );
            expect( fixbody.HE_Besitzstand ).to.deep.eq( resbody.HE_Besitzstand );
            expect( fixbody.EG_Nur_eine_DFStelle ).to.deep.eq( resbody.EG_Nur_eine_DFStelle );
            expect( fixbody.EG_Entschaedigung ).to.deep.eq( resbody.EG_Entschaedigung );
            expect( fixbody.Zehrgeld ).to.deep.eq( resbody.Zehrgeld );
            expect( fixbody.Reisekosten ).to.deep.eq( resbody.Reisekosten );
            expect( fixbody.Taggeld ).to.deep.eq( resbody.Taggeld );
            expect( fixbody.Assistenzbeitrag_Monat ).to.deep.eq( resbody.Assistenzbeitrag_Monat );
            expect( fixbody.Assistenzbeitrag_Anz_Monate ).to.deep.eq( resbody.Assistenzbeitrag_Anz_Monate );
            expect( fixbody.AnzahlDFStellen ).to.deep.eq( resbody.AnzahlDFStellen );
            expect( fixbody.HE_Aufenthalt ).to.deep.eq( resbody.HE_Aufenthalt );
            expect( fixbody.HE_Zusatz ).to.deep.eq( resbody.HE_Zusatz );
            expect( fixbody.TGM_Entscheid_ID ).to.deep.eq( resbody.TGM_Entscheid_ID );
            expect( fixbody.TG_Entscheid_ID ).to.deep.eq( resbody.TG_Entscheid_ID );
            expect( fixbody.TG_Rente ).to.deep.eq( resbody.TG_Rente );
            expect( fixbody.TG_Taetigkeit ).to.deep.eq( resbody.TG_Taetigkeit );
            expect( fixbody.TG_Lohn_Mt ).to.deep.eq( resbody.TG_Lohn_Mt );
            expect( fixbody.AK_Bem ).to.deep.eq( resbody.AK_Bem );
            expect( fixbody.AK_Nachzahlung ).to.deep.eq( resbody.AK_Nachzahlung );
            expect( fixbody.AK_Mon_Zahlung ).to.deep.eq( resbody.AK_Mon_Zahlung );
            expect( fixbody.AK_Tag_Zahlung ).to.deep.eq( resbody.AK_Tag_Zahlung );
            expect( fixbody.Beginn_Dat ).to.deep.eq( resbody.Beginn_Dat );
            expect( fixbody.Ende_Dat ).to.deep.eq( resbody.Ende_Dat );
            expect( fixbody.Effektiv_Beginn_Dat ).to.deep.eq( resbody.Effektiv_Beginn_Dat );
            expect( fixbody.Effektiv_Ende_Dat ).to.deep.eq( resbody.Effektiv_Ende_Dat );
            expect( fixbody.Effektiv_Nicht_Angetreten ).to.deep.eq( resbody.Effektiv_Nicht_Angetreten );
            expect( fixbody.Grund_Aenderung_Dauer ).to.deep.eq( resbody.Grund_Aenderung_Dauer );
            expect( fixbody.Revision_Dat ).to.deep.eq( resbody.Revision_Dat );
            expect( fixbody.Revisionsliste ).to.deep.eq( resbody.Revisionsliste );
            expect( fixbody.Ignorieren ).to.deep.eq( resbody.Ignorieren );
            expect( fixbody.Ungueltig ).to.deep.eq( resbody.Ungueltig );
            expect( fixbody.Ungueltig_Ben_ID ).to.deep.eq( resbody.Ungueltig_Ben_ID );
            expect( fixbody.Ungueltig_Dat ).to.deep.eq( resbody.Ungueltig_Dat );
            expect( fixbody.Rueckgaengig_Visum ).to.deep.eq( resbody.Rueckgaengig_Visum );
            expect( fixbody.Rueckgaengig_Ben_ID ).to.deep.eq( resbody.Rueckgaengig_Ben_ID );
            expect( fixbody.Rueckgaengig_Dat ).to.deep.eq( resbody.Rueckgaengig_Dat );
            expect( fixbody.Reaktiviert_Ben_ID ).to.deep.eq( resbody.Reaktiviert_Ben_ID );
            expect( fixbody.Reaktiviert_Dat ).to.deep.eq( resbody.Reaktiviert_Dat );
            expect( fixbody.Geloescht ).to.deep.eq( resbody.Geloescht );
            expect( fixbody.Geloescht_Ben_ID ).to.deep.eq( resbody.Geloescht_Ben_ID );
            expect( fixbody.Geloescht_Dat ).to.deep.eq( resbody.Geloescht_Dat );
            //expect(fixbody.Geloescht_Grund).to.deep.eq(resbody.Geloescht_Grund) expected null to deeply equal ''
            //expect(fixbody.Bem).to.deep.eq(resbody.Bem) notizen are not equal as was changed in test
            expect( fixbody.VE_Taetigkeit ).to.deep.eq( resbody.VE_Taetigkeit );
            expect( fixbody.VE_Jahr ).to.deep.eq( resbody.VE_Jahr );
            expect( fixbody.VE_Einkommen ).to.deep.eq( resbody.VE_Einkommen );
            //expect(fixbody.VE_Zum_Einkommen).to.deep.eq(resbody.VE_Zum_Einkommen) expected 0 to deeply equal null
            expect( fixbody.VE_Quelle ).to.deep.eq( resbody.VE_Quelle );
            expect( fixbody.VE_Lohnart ).to.deep.eq( resbody.VE_Lohnart );
            expect( fixbody.VE_Lohn ).to.deep.eq( resbody.VE_Lohn );
            expect( fixbody.VE_Std_pro_Tag ).to.deep.eq( resbody.VE_Std_pro_Tag );
            expect( fixbody.VE_Tag_pro_Woche ).to.deep.eq( resbody.VE_Tag_pro_Woche );
            expect( fixbody.VE_Anzahl_ML ).to.deep.eq( resbody.VE_Anzahl_ML );
            //expect(fixbody.Erf_Zeit).to.deep.eq(resbody.Erf_Zeit) is not uniqe ??
            //expect(fixbody.Erf_Ben_ID).to.deep.eq(resbody.Erf_Ben_ID) is not uniqe ??
            //expect(fixbody.Mut_Zeit).to.deep.eq(resbody.Mut_Zeit) is not unique ??
            //expect(fixbody.Mut_Ben_ID).to.deep.eq(resbody.Mut_Ben_ID) is not unique ??
            expect( fixbody.Leistung_Leistungscode ).to.deep.eq( resbody.Leistung_Leistungscode );
            expect( fixbody.Leistung_Leistungsgruppe ).to.deep.eq( resbody.Leistung_Leistungsgruppe );
            expect( fixbody.Gebrechen_Gebrechenscode ).to.deep.eq( resbody.Gebrechen_Gebrechenscode );
            expect( fixbody.VMVersandDatValue ).to.deep.eq( resbody.VMVersandDatValue );
            expect( fixbody.EntscheidValue ).to.deep.eq( resbody.EntscheidValue );
            expect( fixbody.BeschwerdeValue ).to.deep.eq( resbody.BeschwerdeValue );
            expect( fixbody.StatusCode ).to.deep.eq( resbody.StatusCode );
            expect( fixbody.VersichertenName ).to.deep.eq( resbody.VersichertenName );
            expect( fixbody.Leistung ).to.deep.eq( resbody.Leistung );
            expect( fixbody.Gebrechen ).to.deep.eq( resbody.Gebrechen );
            expect( fixbody.Funktausfall ).to.deep.eq( resbody.Funktausfall );
            expect( fixbody.GrundsatzentscheidValue ).to.deep.eq( resbody.GrundsatzentscheidValue );
            expect( fixbody.Entscheidtyp_Entscheidtyp ).to.deep.eq( resbody.Entscheidtyp_Entscheidtyp );
            expect( fixbody.ArbeitslisteValue ).to.deep.eq( resbody.ArbeitslisteValue );
            expect( fixbody.Leistung_Bez ).to.deep.eq( resbody.Leistung_Bez );
            expect( fixbody.Gebrechen_Bez ).to.deep.eq( resbody.Gebrechen_Bez );
            expect( fixbody.Funktausfall_Funktausfallcode ).to.deep.eq( resbody.Funktausfall_Funktausfallcode );
            expect( fixbody.Funktausfall_Bez ).to.deep.eq( resbody.Funktausfall_Bez );
            expect( fixbody.Stamm_Vorname ).to.deep.eq( resbody.Stamm_Vorname );
            expect( fixbody.Stamm_Nr_Stamm_Nr ).to.deep.eq( resbody.Stamm_Nr_Stamm_Nr );
            expect( fixbody.Entscheidtyp_Entscheid_AK ).to.deep.eq( resbody.Entscheidtyp_Entscheid_AK );
            expect( fixbody.Leistung_ICD_Zwingend ).to.deep.eq( resbody.Leistung_ICD_Zwingend );
            expect( fixbody.EreignisText ).contains( resbody.EreignisText );
            //expect(fixbody.Bearbeiter).to.deep.eq(resbody.Bearbeiter) is not unique user
            expect( fixbody.Diagnose_GebrechenscodeICD ).to.deep.eq( resbody.Diagnose_GebrechenscodeICD );
            expect( fixbody.GesuchText ).contains( resbody.GesuchText );
            //expect(fixbody.ErfBenutzer).to.deep.eq(resbody.ErfBenutzer) is not unique user
            //expect(fixbody.MutBenutzer).to.deep.eq(resbody.MutBenutzer) is not unique user
            //expect(fixbody.MutZeit).to.deep.eq(resbody.MutZeit) date
            //expect(fixbody.ErfZeit).to.deep.eq(resbody.ErfZeit) time
            expect( fixbody.Entscheidtyp_VM_Formular_ID ).to.deep.eq( resbody.Entscheidtyp_VM_Formular_ID );
            expect( fixbody.VMSendungStatus ).to.deep.eq( resbody.VMSendungStatus );
            expect( fixbody.MeldungAktiv ).to.deep.eq( resbody.MeldungAktiv );
            expect( fixbody.MeldungText ).to.deep.eq( resbody.MeldungText );
            expect( fixbody.Stamm_Hoheit_Ben_ID ).to.deep.eq( resbody.Stamm_Hoheit_Ben_ID );
            expect( fixbody.HoheitBenutzer ).to.deep.eq( resbody.HoheitBenutzer );
            expect( fixbody.FachBenutzer ).to.deep.eq( resbody.FachBenutzer );
            expect( fixbody.ZustBenutzer ).to.deep.eq( resbody.ZustBenutzer );
            expect( fixbody.MBSendungStatus ).to.deep.eq( resbody.MBSendungStatus );
            expect( fixbody.VBSendungStatus ).to.deep.eq( resbody.VBSendungStatus );
            expect( fixbody.Entscheidtyp_AHV_Leistung ).to.deep.eq( resbody.Entscheidtyp_AHV_Leistung );
            expect( fixbody.Entscheidtyp_Grenzgaenger ).to.deep.eq( resbody.Entscheidtyp_Grenzgaenger );
            expect( fixbody.Stamm_Geburts_Dat_Char ).to.deep.eq( resbody.Stamm_Geburts_Dat_Char );
            expect( fixbody.Supertext_Def_Beginn_Dat ).to.deep.eq( resbody.Supertext_Def_Beginn_Dat );
            expect( fixbody.Supertext_Def_Ende_Dat ).to.deep.eq( resbody.Supertext_Def_Ende_Dat );
            expect( fixbody.Supertext_Nr ).to.deep.eq( resbody.Supertext_Nr );
            expect( fixbody.ArztBearbeiter ).to.deep.eq( resbody.ArztBearbeiter );
            expect( fixbody.Supertext_Def_Revision_Dat ).to.deep.eq( resbody.Supertext_Def_Revision_Dat );
            expect( fixbody.JuristBearbeiter ).to.deep.eq( resbody.JuristBearbeiter );
            expect( fixbody.Supertext_Ablehnungscode ).to.deep.eq( resbody.Supertext_Ablehnungscode );
            expect( fixbody.Leistung_DF_Stellen_noetig ).to.deep.eq( resbody.Leistung_DF_Stellen_noetig );
            expect( fixbody.SachBearbeiter ).to.deep.eq( resbody.SachBearbeiter );
            expect( fixbody.KaderBearbeiter ).to.deep.eq( resbody.KaderBearbeiter );
            expect( fixbody.Leistung_EG_Artikel_8a ).to.deep.eq( resbody.Leistung_EG_Artikel_8a );
            expect( fixbody.DirektionBearbeiter ).to.deep.eq( resbody.DirektionBearbeiter );
            expect( fixbody.Leistung_Eingliederung_erweitert ).to.deep.eq( resbody.Leistung_Eingliederung_erweitert );
            expect( fixbody.Leistung_Hilfsmittel ).to.deep.eq( resbody.Leistung_Hilfsmittel );
            expect( fixbody.Stamm_Grenzgaenger ).to.deep.eq( resbody.Stamm_Grenzgaenger );
            expect( fixbody.ZehrgeldBez ).to.deep.eq( resbody.ZehrgeldBez );
            expect( fixbody.Leistung_Revision ).to.deep.eq( resbody.Leistung_Revision );
            expect( fixbody.Leistung_Taggeld ).to.deep.eq( resbody.Leistung_Taggeld );
            expect( fixbody.Leistung_Taggeldmitteilung ).to.deep.eq( resbody.Leistung_Taggeldmitteilung );
            expect( fixbody.Leistung_Wartetaggeld ).to.deep.eq( resbody.Leistung_Wartetaggeld );
            expect( fixbody.CanVisieren ).to.deep.eq( resbody.CanVisieren );
            expect( fixbody.VMVolltextMuss ).to.deep.eq( resbody.VMVolltextMuss );
            expect( fixbody.MBVolltextMuss ).to.deep.eq( resbody.MBVolltextMuss );
            expect( fixbody.VBVolltextMuss ).to.deep.eq( resbody.VBVolltextMuss );
            expect( fixbody.GGVolltextMuss ).to.deep.eq( resbody.GGVolltextMuss );
            expect( fixbody.AnzahlDFStellenBez ).to.deep.eq( resbody.AnzahlDFStellenBez );
            expect( fixbody.LeistungText ).to.deep.eq( resbody.LeistungText );
            expect( fixbody.Leistung_Rente ).to.deep.eq( resbody.Leistung_Rente );
            expect( fixbody.Leistung_HE ).to.deep.eq( resbody.Leistung_HE );
            expect( fixbody.UngueltigBenutzer ).to.deep.eq( resbody.UngueltigBenutzer );
            expect( fixbody.HeAufenthaltText ).to.deep.eq( resbody.HeAufenthaltText );
            expect( fixbody.HeZusatzText ).to.deep.eq( resbody.HeZusatzText );
            expect( fixbody.Leistung_Assistenzbeitrag ).to.deep.eq( resbody.Leistung_Assistenzbeitrag );
            expect( fixbody.CanUpdateBesitzstand ).to.deep.eq( resbody.CanUpdateBesitzstand );
            expect( fixbody.CanMove ).to.deep.eq( resbody.CanMove );
            expect( fixbody.HasVersicherung ).to.deep.eq( resbody.HasVersicherung );
            expect( fixbody.NumberDFStellen ).to.deep.eq( resbody.NumberDFStellen );
            expect( fixbody.Leistung_Aufhebung_moeglich ).to.deep.eq( resbody.Leistung_Aufhebung_moeglich );
            expect( fixbody.LeadEingliederungSelfHdl ).to.deep.eq( resbody.LeadEingliederungSelfHdl );
            expect( fixbody.TaggeldmitteilungSelfHdl ).to.deep.eq( resbody.TaggeldmitteilungSelfHdl );
            expect( fixbody.Entscheidtyp_MB_Formular_ID ).to.deep.eq( resbody.Entscheidtyp_MB_Formular_ID );
            expect( fixbody.Entscheidtyp_VB_Formular_ID ).to.deep.eq( resbody.Entscheidtyp_VB_Formular_ID );
            expect( fixbody.Supertext_MB_Supertext_ID ).to.deep.eq( resbody.Supertext_MB_Supertext_ID );
            expect( fixbody.Supertext_GG_Supertext_ID ).to.deep.eq( resbody.Supertext_GG_Supertext_ID );
            expect( fixbody.HasBegruendungDynamisch ).to.deep.eq( resbody.HasBegruendungDynamisch );
            // expect(fixbody.WEIV_DFStelle).to.deep.eq(resbody.WEIV_DFStelle) is not unique ??
            expect( fixbody.TGVMVersandDat ).to.deep.eq( resbody.TGVMVersandDat );
            expect( fixbody.HasTaggeldmitteilung ).to.deep.eq( resbody.HasTaggeldmitteilung );
            expect( fixbody.Verfuegungsart ).to.deep.eq( resbody.Verfuegungsart );
            expect( fixbody.Leistung_WEIV_Zusatz ).to.deep.eq( resbody.Leistung_WEIV_Zusatz );
            expect( fixbody.TGLeistungText ).to.deep.eq( resbody.TGLeistungText );
            expect( fixbody.TGEntscheid ).to.deep.eq( resbody.TGEntscheid );
            expect( fixbody.TGEntscheidSelfHdl ).to.deep.eq( resbody.TGEntscheidSelfHdl );
            expect( fixbody.TGRenteBez ).to.deep.eq( resbody.TGRenteBez );
            //expect(fixbody.AKBez).to.deep.eq(resbody.AKBez) is not unique ??
            //expect(fixbody.Stamm_AK_ID).to.deep.eq(resbody.Stamm_AK_ID) is not unique ??
            expect( fixbody.WEIV_DFOrt ).to.deep.eq( resbody.WEIV_DFOrt );
            //expect(fixbody.Ausgleichskasse_SelfHdl).to.deep.eq(resbody.Ausgleichskasse_SelfHdl) is not unique ??
            expect( fixbody.WEIV_VerfCoaching ).to.deep.eq( resbody.WEIV_VerfCoaching );
            expect( fixbody.HasICD ).to.deep.eq( resbody.HasICD );
            expect( fixbody.WEIV_Unfalldeckung ).to.deep.eq( resbody.WEIV_Unfalldeckung );
            expect( fixbody.HasDurchfuehrungsstellen ).to.deep.eq( resbody.HasDurchfuehrungsstellen );
            expect( fixbody.WEIV_Haftpflicht ).to.deep.eq( resbody.WEIV_Haftpflicht );
            expect( fixbody.WEIV_ExtMedFall ).to.deep.eq( resbody.WEIV_ExtMedFall );
            expect( fixbody.WEIV_Einigungsverfahren ).to.deep.eq( resbody.WEIV_Einigungsverfahren );
            expect( fixbody.WEIV_Verfahrensphase ).to.deep.eq( resbody.WEIV_Verfahrensphase );
            expect( fixbody.WEIV_Revisionscode ).to.deep.eq( resbody.WEIV_Revisionscode );
            expect( fixbody.WEIV_AblehnungMassnahme ).to.deep.eq( resbody.WEIV_AblehnungMassnahme );
            expect( fixbody.AblehnungMassnahmeBez ).to.deep.eq( resbody.AblehnungMassnahmeBez );
            expect( fixbody.WEIV_Auflage ).to.deep.eq( resbody.WEIV_Auflage );
            expect( fixbody.WEIV_Auflage_Dat ).to.deep.eq( resbody.WEIV_Auflage_Dat );
            expect( fixbody.WEIV_Auflage_Ergebnis ).to.deep.eq( resbody.WEIV_Auflage_Ergebnis );
            expect( fixbody.WEIV_ZAS_Gemeldet_Beendigung ).to.deep.eq( resbody.WEIV_ZAS_Gemeldet_Beendigung );
            expect( fixbody.WEIV_Beendigung ).to.deep.eq( resbody.WEIV_Beendigung );
            expect( fixbody.WEIV_Beendigung_Dat ).to.deep.eq( resbody.WEIV_Beendigung_Dat );
            expect( fixbody.WEIV_Beendigung_Ergebnis ).to.deep.eq( resbody.WEIV_Beendigung_Ergebnis );
            expect( fixbody.WEIV_ZAS_Gemeldet_Auflage ).to.deep.eq( resbody.WEIV_ZAS_Gemeldet_Auflage );
            expect( fixbody.akRowSec ).to.deep.eq( resbody.akRowSec );
            expect( fixbody.akUiActions ).to.deep.eq( resbody.akUiActions );
            expect( fixbody.akUiOptions ).to.deep.eq( resbody.akUiOptions );
            expect( fixbody.UserChangedHdl ).to.deep.eq( resbody.UserChangedHdl );
            expect( fixbody.UserCreatedHdl ).to.deep.eq( resbody.UserCreatedHdl );
            expect( fixbody.akImageFilename ).to.deep.eq( resbody.akImageFilename );
            expect( fixbody.akTextHtml ).to.deep.eq( resbody.akTextHtml );
            expect( fixbody.akTextAscii ).to.deep.eq( resbody.akTextAscii );
            expect( fixbody.SmartCopiedFrom ).to.deep.eq( resbody.SmartCopiedFrom );
            expect( fixbody.OwnUrsprung ).to.deep.eq( resbody.OwnUrsprung );
            expect( fixbody.OwnUrsprung ).to.deep.eq( resbody.OwnUrsprung );
            expect( fixbody.seq ).to.deep.eq( resbody.seq );
          } );
        } );
    } );
  } );
} );

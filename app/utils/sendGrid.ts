import * as sgMail from '@sendgrid/mail';

export const SendGrid = (Email: string) => {

  const htmlContent = `
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="robots" content="noindex, nofollow"><meta name="referrer" content="no-referrer">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
      <title>Better Together</title>
      <style type="text/css">
/* RESET STYLES */
        table {border - collapse:collapse;}
        img, a img {border:0; height:auto; outline:none; text-decoration:none;}
        body {height:100% !important; margin:0 auto !important; padding:0; width:100% !important;}

        /* CLIENT-SPECIFIC STYLES */
        img {-ms - interpolation - mode: bicubic;} /* Force IE to smoothly render resized images. */
        #outlook a {padding:0;} /* Force Outlook 2007 and up to provide a "view in browser" message. */
        table {mso - table - lspace:0pt; mso-table-rspace:0pt;} /* Remove spacing between tables in Outlook 2007 and up. */
        .ReadMsgBody {width:100%;} .ExternalClass {width:100%;} /* Force Outlook.com to display emails at full width. */
        p, a, td {mso - line - height - rule:exactly;} /* Force Outlook to render line heights as they're originally set. */
        p, a, td, body, table {-ms - text - size - adjust:100%; -webkit-text-size-adjust:100%;} /* Prevent Windows- and Webkit-based mobile platforms from changing declared text sizes. */
        .ExternalClass, .ExternalClass p, .ExternalClass td, .ExternalClass div, .ExternalClass span, .ExternalClass font {line - height:100%;} /* Force Outlook.com to display line heights normally. */
        a [x-apple-data-detectors] {color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important;} /* attempt to control apple deata detection */

        /* TEMPLATE STYLES */
        @media screen and (max-width:480px){
.mw100{max - width:100% !important;}
        .mw95{max - width:95% !important;}
        .mw50{max - width:50% !important;}
        .w100{width:100% !important;}
        .w96{width:96% !important;}
        .mblpdrm-r{padding - right:0 !important;}
        .mblpdrm-l{padding - left:0 !important;}
        .Hellode {display:none !important;}
        .mcenter {text - align: center !important; margin: 0 auto !important;}
}
        .msoFix {
          mso - table - lspace:-1pt;
        mso-table-rspace:-1pt;
}
      </style>
      <!--[if gte mso 9]><xml>  <o:OfficeDocumentSettings>   <o:AllowPNG />   <o:PixelsPerInch>96</o:PixelsPerInch>  </o:OfficeDocumentSettings> </xml><![endif]-->
    </head>
    <body bgcolor="#00B1E1" style="padding: 0;margin: 0;width: 100%;background:url('https://image.e.atlassian.com/lib/fe4011727164047d751070/m/4/backgroundPixel.png') top center / auto 100% repeat-x #0079bf;font-family: 'Helvetica', 'Arial', san-serif;max-width: 100%;background-color: #00B1E1;">
      <style type="text/css">
        div.preheader
        {display: none !important; }
      </style>
      <div class="preheader" style="font-size: 1px; display: none !important;">New updates and more to read about in the New Year</div>
      <div style="display: none; max-height: 0px; overflow: hidden;">͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;͏&zwnj;&nbsp;
      </div>
      <table align="center" cellpadding="0" cellspacing="0" border="0" style="width:100%;Margin:0 auto;background-color:#00b1e1; background:url('https://image.e.atlassian.com/lib/fe4011727164047d751070/m/4/backgroundPixel.png') top center / auto 100% repeat-x #0079bf; font-family:'Helvetica','Arial',san-serif; margin:0; max-width:100%; padding:0; width:100%" bgcolor="#00B1E1">
        <tbody><tr>
          <td style="font-size:0;">&nbsp;</td>
          <td align="center" valign="top" style="width:600px;">
            <table align="center" cellpadding="0" cellspacing="0" border="0" style="width:100%;" class="w96">
              <tbody><tr>
                <td>
                  <table style="margin:10px auto; min-width:100%; width:580;" cellpadding="0" cellspacing="0" border="0" class="preheader">
                    <!-- Read in Browser -->
                    <tbody><tr>
                      <td align="right" style="padding:0px 50px 0px 0px;">
                        <a href="https://view.e.atlassian.com/?qs=7abf2d6a41309d3643ab5e8c2388414cbb8832cdeee6ba6fb6d197834840cdd7a433bd6ee66e483a456f25ee18841db2d8b5840a58cfb554f377e4d6904dcfcfb765b127e2ef28f9f2d93b63e163d7f025980720600ce00a7ffa6f049c2d4d5d" style="font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;font-size:12px;color:#FFFFFF; font-style: italic; text-align:right;opacity:0.5;text-decoration: none; "><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tbody><tr><td class="stylingblock-content-wrapper camarker-inner">View&nbsp;in&nbsp;Browser →</td></tr></tbody></table>
                        </a>
                      </td>
                    </tr>
                      <!-- End Read in Browser -->
                    </tbody></table>
                </td>
              </tr>
                <!-- LOGO -->
                <tr>
                  <td align="center" style="padding:5px 0 0 0;">
                    <a href="https://click.e.atlassian.com/?qs=75f2d77499e6c1d1583bc18df5dd6476ad481628fcac595bb32e362c6b578a1de79fbf5f973d6f738e0d8d01250a65003cf282f3a062386a8e3785d3eaaccd28" style="font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;font-size:16px;color:#0079BF;text-decoration:none;">
                      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tbody><tr><td class="stylingblock-content-wrapper camarker-inner"><center><img alt="Trello Logo" height="55" style="display: block; margin:0 auto;" width="200" src="https://i.postimg.cc/TPdsq9Sq/Iconpng.png"></center></td></tr></tbody></table>
                    </a>
                  </td>
                </tr>
                <!-- END LOGO -->
                <!-- white box -->
                <tr>
                  <td align="center" style="padding-top:10px;">
                    <table bgcolor="white" border="0" cellpadding="0" cellspacing="0" style="background:white; border-radius:8px; border:0; margin:10px auto; width:100%" class="content">
                      <!--primary 1-->
                      <!-- hero image with border and rounded corners USE ONLY ONE HERO IMAGE-->
                      <tbody><tr>
                        <td align="center" style="padding-top:40px;">
                          <a href="https://click.e.atlassian.com/?qs=75f2d77499e6c1d14e4b1df24c77307d7ff8cb77d3c5c87cd268836d2e8f9e727269c7d64c88583512054c4ff3c379a79688e9700f3cae31aa6b570ee291d58e" style="font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;font-size:18px; line-height:24px;color:#444444;text-decoration:none;">
                            <img src="https://view.e.atlassian.com/Better Together_files/image-20231016-152245.png" alt="Ivoyant 🎉" title="Ivoyant 🎉" border="0" width="500" style="display:block;outline:0;padding:0;height:auto;font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;font-size:18px;color:#444444; line-height:24px;border-radius:6px; margin:5px;"></a>
                        </td>
                      </tr>
                        <!-- end hero image with border and rounded corners-->

                        <tr>
                          <td align="center" style="padding:20px 50px 40px 50px">
                            <table border="0" cellpadding="0" cellspacing="0">
                              <!-- start headline -->
                              <tbody><tr>
                                <td align="center">
                                  <table cellpadding="0" cellspacing="0" border="0" style="width:100%;" class="w100">
                                    <tbody><tr>
                                      <td style="padding-top:20px;font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;font-weight:bold;font-size:26px;line-height:32px;color:#444444;text-align:center;">
                                        <a href="https://click.e.atlassian.com/?qs=75f2d77499e6c1d1f9f37067b8210db20a8a198f8aaf326079a6f1221a1604af6eaf5747ead21bc9ed53bd69dd4a4c10611f074236a1560d107dda10f22dd374" style="text-decoration:none;color:#444444;font-weight:bold;">
                                         Thanks for sharing your details! 🎉</a>
                                      </td>
                                    </tr>
                                    </tbody></table>
                                </td>
                              </tr>
                                <!-- end headline -->
                                <!-- start subhead -->
                                <tr>
                                  <td align="center">
                                    <table cellpadding="0" cellspacing="0" border="0" style="width:100%;" class="w100">
                                      <tbody><tr>
                                        <td style="padding-top:20px;font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;font-size:22px;line-height:26px;color:#444444;text-align:center;">
                                          <a href="https://click.e.atlassian.com/?qs=75f2d77499e6c1d1f9f37067b8210db20a8a198f8aaf326079a6f1221a1604af6eaf5747ead21bc9ed53bd69dd4a4c10611f074236a1560d107dda10f22dd374" style="text-decoration:none;color:#444444;">
                                          Thank you for reaching out! We've received your form submission and are currently reviewing it. Expect a prompt response from our team shortly.
                                          For any urgent inquiries, feel free to reach out to us directly at [info@ivoyant.com].                                        </td>
                                      </tr>
                                      </tbody></table>
                                  </td>
                                </tr>
                                <!-- end subhead -->
                                <!--cta-->
                                <tr>
                                  <td align="center" style="padding-top:20px;">
                                    <!--cta button-->
                                    <table cellpadding="0" cellspacing="0" border="0">
                                      <tbody><tr>
                                        <td align="center" style="border-radius:8px;background-color:#61bd4f;">
                                          <a href="https://click.e.atlassian.com/?qs=75f2d77499e6c1d1949f6a90f2f086877cbd34f90fe757e11d0f01008f46d21c416fb9dbe3b0ec3d54687d8f21fdf14016fa14c09e50ee7571158f3cdb2e5813" target="_blank" style="display:inline-block;border:1px solid #61bd4f;font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;font-size:24px; line-height: 24px;color:#ffffff;text-decoration:none;border-radius: 6px; padding:15px 20px; font-weight: bold;">
                                            <!--[if mso]>&nbsp;&nbsp;&nbsp;&nbsp;<![endif]-->Read more<!--[if mso]>&nbsp;&nbsp;&nbsp;&nbsp;<![endif]--></a>
                                        </td>
                                      </tr>
                                      </tbody></table>
                                  </td>
                                </tr>
                                <!-- end cta -->
                              </tbody></table>
                          </td>
                        </tr>

                        <!-- hero image with border and rounded corners USE ONLY ONE HERO IMAGE-->
                        <tr>
                          <td align="center" style="padding-top:0px;">
                            <a href="https://click.e.atlassian.com/?qs=1ac0277f0d7a64f48fa7390877df5eae5a8aa2915ff5b34d3617b83f2027368647675ebbcb440438d123607baa04c017703bc9ecde8e88311a5d73382b1e130e" style="font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;font-size:18px; line-height:24px;color:#444444;text-decoration:none;">
                              <img src="./Better Together_files/image-20231222-010531.jpg" alt="Try out this new feature for Trello Enterprise ✨" title="Try out this new feature for Trello Enterprise ✨" border="0" width="500" style="display:block;outline:0;padding:0;height:auto;font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;font-size:18px;color:#444444; line-height:24px;border-radius:6px; margin:5px;"></a>
                          </td>
                        </tr>



                      </tbody>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td align="center">
                    <!-- Dynamic Newsletter Module ENGLISH-->
                    <table align="center" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width: 600px;">
                      <!--start double column blue box wrapper -->
                      <tbody><tr>
                        <td align="center" style="padding-top: 20px;">
                          <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
                            <tbody><tr>
                              <td style="font-size:0;vertical-align:middle; padding: 15px 20px 15px 15px; border-radius: 8px; background-color: #055A8C;">
                                <!--[if (gte mso 9)|(IE)]>     <table border="0" cellspacing="0" cellpadding="0" style="width:580px;">         <tr>             <td valign="middle" style="width:280px;" class="w100">     <![endif]-->
                                  <div style="display:inline-block;width:100%;max-width:280px;vertical-align:middle;background-color: #055A8C;" class="mw100">
                                    <table border="0" cellspacing="0" cellpadding="0" style="width:100%;" class="mcenter">
                                      <tbody><tr>
                                        <td style="padding-right: 20px;" class="mblpdrm-r">
                                          <a href="https://click.e.atlassian.com/?qs=1ac0277f0d7a64f4b90add083d77416b4bf4ba88cfa9eca6d63bb055ba9931603a0cd6e51f94df4d1a6492c7cf69e1f27c14d39ac8f6e11b1dcf75dd024ef81e" style="font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;font-size:16px;color:#0052CC;text-decoration:none;">
                                            <center><img src="./Better Together_files/CSD-5025.jpg" alt="Have you joined the Trello Community yet? 🌮" title="Have you joined the Trello Community yet? 🌮" width="250" border="0" style="display:block;outline:0;padding:0;border:0;height:auto;font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;font-size:12px;color:#0052CC;border-radius:6px;"></center></a>
                                        </td>
                                      </tr>
                                      </tbody></table>
                                  </div>
                                  <!--[if (gte mso 9)|(IE)]></td><td style="width:285px;" ><![endif]-->
                                    <div style="vertical-align:middle; width:100%; max-width:285px; display:inline-block;background-color: #055A8C;" class="mw100">
                                      <table border="0" cellspacing="0" cellpadding="0" style="width:100%;background-color: #055A8C;" class="mcenter">
                                        <tbody><tr>
                                          <td align="left" class="mcenter" style="background-color: #055A8C;">
                                            <table border="0" cellspacing="0" cellpadding="0" style="width:100%;" class="mcenter">
                                              <tbody><tr>
                                                <td style="padding-top: 10px;font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;font-size:18px;line-height:24px;color:#FFFFFF;text-align:left;" class="mcenter">
                                                  <a href="https://click.e.atlassian.com/?qs=ca75ec5ae15d90a12cbc76978976bf07ca11b7200d996489ed9fd302e4948545b440b12b1126c79db85908a8407b1f3cddb946cb98adf430ca8e057589958ad0" style="font-family: 'Helvetica neue', Helvetica, Arial, Verdana, sans-serif; font-size:18px;line-height:24px;color:#FFFFFF; text-align:left; text-decoration: none; font-weight: bold;">Have you joined the Atlassian Community yet? 🌮 </a>
                                                </td>
                                              </tr>
                                                <tr>
                                                  <td style="padding-top: 10px;font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;font-size:18px;line-height:24px;color:#FFFFFF;text-align:left;" class="mcenter">
                                                    Share tips, tricks, and new ways to use Trello in our Atlassian Community group.
                                                  </td>
                                                </tr>
                                                <!--cta-->
                                                <tr>
                                                  <td style="padding: 20px 0px 0px 0px;" class="mcenter">
                                                    <!--cta button-->
                                                    <table cellpadding="0" cellspacing="0" border="0" class="mcenter">
                                                      <tbody><tr>
                                                        <td align="left" style="border-radius:8px;background-color:#4f769c;">
                                                          <a href="https://click.e.atlassian.com/?qs=ca75ec5ae15d90a1bdf1d3bf1eb81aa0be22d858bbf8600ce8d045a1904e8f7e62bcd1918cba992c28395dd17f8edad860b1e88a7f768b30c4ff575212bf8420" target="_blank" style="display:inline-block;border:1px solid #4f769c;font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;font-size:18px; line-height: 24px;color:#ffffff;text-decoration:none;border-radius: 6px; padding:15px 20px; font-weight: bold;">
                                                            <!--[if mso]>&nbsp;&nbsp;&nbsp;&nbsp;<![endif]-->Join now<!--[if mso]>&nbsp;&nbsp;&nbsp;&nbsp;<![endif]--></a>
                                                        </td>
                                                      </tr>
                                                      </tbody></table>
                                                  </td>
                                                </tr>
                                                <!-- end cta -->
                                              </tbody></table>
                                          </td>
                                        </tr>
                                        </tbody></table>
                                    </div>
                                    <!--[if (gte mso 9)|(IE)]>   </td>   </tr>   </table>   <![endif]-->
                              </td>
                            </tr>
                            </tbody></table>
                        </td>
                      </tr>
                        <!-- end double column box wrapper -->
                      </tbody></table>
                    <!-- END Dynamic Newsletter Module ENGLISH-->
                  </td>
                </tr>
                <!-- END PUT DYNAMIC MODULE HERE IF NEEDED -->
                <!-- footer -->
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tbody><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- FOOTER -->
                      <table style="width:100%;" cellspacing="0" cellpadding="0" border="0">
                        <tbody><tr>
                          <td style="padding-top:40px;padding-bottom:0px;" align="center">
                            <table style="width:100%;" cellspacing="0" cellpadding="0" border="0">
                              <tbody><tr>
                                <td style="padding-top:0px;font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;font-size:14px;line-height:20px;color:#FFFFFF;text-align:center;">
                                  <em>Want more?</em>
                                </td>
                              </tr>
                                <tr>
                                  <td style="padding-top:5px;font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;font-size:14px;line-height:20px;color:#FFFFFF;text-align:center;">
                                    <em>Get your productivity fix at the </em><a href="https://click.e.atlassian.com/?qs=ca75ec5ae15d90a1052b7f3f92e721d47c59225c08229ef69b368bbc3858e0e1834332a71d1783938b7bce60e57613c7522442a001b0002269a2cf4c0c98848c" style="color:#FFFFFF; text-decoration:none;"><em>Trello Blog →</em></a>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding-top:10px;font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;color:#FFFFFF;text-align:center;">
                                    <center><a href="https://click.e.atlassian.com/?qs=ca75ec5ae15d90a1288679402581301c9b665555a6f37af7810e56bbcf2e87294b233caf024daf1e7bafbe01d67f9cadb4f63a4576a153a7ee85de02d512a06f" style="text-decoration: none; padding:8px 0;"><img alt="Facebook" height="32" src="./Better Together_files/facebook-social.png" style="display: inline;" width="32"> </a>&nbsp;&nbsp;
                                      <a href="https://click.e.atlassian.com/?qs=ca75ec5ae15d90a19991a58d9be8a4757678b8e63287ad5ce0f6921e04b3661c266fdd7aba98f95f8401b828d2ed24f152669bac839a29500b9f0b5e56086628" style="text-decoration: none; padding:8px 0;"> <img alt="Twitter" height="32" src="./Better Together_files/twitter-social.png" style="display: inline;" width="32"> </a>&nbsp;&nbsp;
                                      <a href="https://click.e.atlassian.com/?qs=ca75ec5ae15d90a1fbfb408dab8f7b8bec9ed5166c310047430028469b1e17c70ba9e4e41eba202cea5b354271a82fa9779c81cf12481880f6a8db94e9f718d2" style="text-decoration: none; padding:8px 0;"> <img alt="LinkedIn" height="32" src="./Better Together_files/linkedin-social.png" style="display: inline;" width="32"> </a>&nbsp;&nbsp;
                                      <a href="https://click.e.atlassian.com/?qs=ca75ec5ae15d90a1cc36e46d5684b8da06805a68158dd32bd72788afc929fca90034940076626aa1eb95b62c920bc85b28a2c8133945d134db3332fc5e60b171" style="text-decoration: none; padding:8px 0;"> <img alt="Instagram" height="32" src="./Better Together_files/insta-social.png" style="display: inline;" width="32"> </a></center>
                                  </td>
                                </tr>
                                <!--<tr>        <td style="padding-top:15px;font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;font-size:14px;line-height:20px;color:#FFFFFF;text-align:center;">        <a href="https://www.atlassian.com/company/careers/all-jobs?team=&location=&search=Trello" style="color:#FFFFFF; text-decoration:none;" alias="we are hiring"><strong><em>We're Hiring!</em></strong></a>        </td>       </tr>-->
                                <tr>
                                  <td style="padding-top:10px;font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;color:#FFFFFF;text-align:center;">
                                    <center><a href="https://click.e.atlassian.com/?qs=ca75ec5ae15d90a1d01ccd09d049226423e3f60c45eb15871496f09bffeaa64cde7ded823b0dd7aa1c91f9ab297b5f91b40dcfca99d414ed77589c1b35d2c033" style="text-decoration: none; padding:8px;"><img alt="Apple App Store" src="./Better Together_files/apple-app-store-button.png" width="137"> </a> <a href="https://click.e.atlassian.com/?qs=ca75ec5ae15d90a18ce0be5bbdfe87a1061e5a231b3a96e7860e73908a3f7a3bf66cd7300adcc66929732dffae6c7fbca70d5ea3dcf2aea61aaa0a1ac734cbbc" style="text-decoration: none; padding:8px;"> <img alt="Google Play Store" src="./Better Together_files/Get_it_on_Google_play.png" width="137"> </a></center>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding-top:10px;font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;font-size:14px;line-height:20px;color:#FFFFFF;text-align:center;">
                                    <em>Copyright © 2024 Trello Inc., All rights reserved.</em>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;font-size:14px;line-height:20px;color:#FFFFFF;text-align:center;">
                                    <em>888 Broadway Floor 4 New York, NY 10003, USA</em>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding-top:10px; display:block;font-family:'Helvetica neue', Helvetica, Arial, Verdana, sans-serif;font-size:14px;line-height:20px;color:#FFFFFF;text-align:center;" align="center">
                                    <a href="https://view.e.atlassian.com/?qs=7abf2d6a41309d3643ab5e8c2388414cbb8832cdeee6ba6fb6d197834840cdd7a433bd6ee66e483a456f25ee18841db2d8b5840a58cfb554f377e4d6904dcfcfb765b127e2ef28f9891d4a67ecdfef541808b24d9a578fc30a6e9bd97c00c193" style="color:#FFFFFF;text-decoration:none;"><em>View&nbsp;in&nbsp;Browser</em></a> |
                                    <a href="https://click.e.atlassian.com/?qs=9aa4e15f8ce3933d552e480399fd3627a8c3aa91125ddbe5723595bf12fcbf917e24a1e373a924a10a23a7fcfe93726058130de3d32ff5e4c46ab58251267d6b" style="color:#FFFFFF;text-decoration:none;"><em>Privacy&nbsp;Policy</em></a> |
                                    <a href="https://click.e.atlassian.com/?qs=9aa4e15f8ce3933d19848591db50e77edfddf2cbbc5f2913f41fa86581f04ec6831b3d6b06729dba748384a1d19d9fe777620f5d4cc97c106211a29371c36629" style="color:#FFFFFF;text-decoration:none;"><em>Manage&nbsp;Account</em></a> |
                                    <a href="https://click.e.atlassian.com/?qs=9aa4e15f8ce3933dd61af80ec0b3df610c5dd01405ad7bda992cf1a832c2ed6b56424bf8cc5d22a66ad69285ddd25e1f72255d7f8c18ed4860ed568c93df7906" style="color:#FFFFFF;text-decoration:none;"><em>Unsubscribe</em></a>
                                    <img src="./Better Together_files/open.aspx" width="1" height="1" alt="" ak8n2d67d=""></td>
                                </tr>
                              </tbody></table>
                          </td>
                        </tr>
                        </tbody></table>
                    </td></tr></tbody></table>
                  </td>
                </tr>

                <!-- end footer-->
              </tbody></table>
            <!--/table removes gmail bg line between stacked tables-->
            <!--/ALL CONTENT ENDS HERE-->
          </td>
          <td style="font-size:0;">&nbsp;</td>
        </tr>
        </tbody></table>

    </body></html>
`;
  const email = Email;
console.warn("mails sending initialeted")
      sgMail.setApiKey(`${process.env.SENDGRID_KEY}`);
      const msg = {
        to: email?.toString(),
        from: 'thejeshm@ivoyant.com', // sender email address
        subject: 'Thank You for Sharing Your Details', // email subject
        html: htmlContent,
      };
      sgMail.send(msg)
      .then(([response]) => {
        console.warn('Status code:', response.statusCode);
        console.warn('Email sent successfully');
        
      })
      .catch(error => console.error(error));
  };
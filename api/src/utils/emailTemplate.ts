export const getEmailTemplate = (Usuario: string, link: string): string => {
  return`<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
 <meta charset="UTF-8" />
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <!--[if !mso]><!-- -->
 <meta http-equiv="X-UA-Compatible" content="IE=edge" />
 <!--<![endif]-->
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <meta name="format-detection" content="telephone=no" />
 <meta name="format-detection" content="date=no" />
 <meta name="format-detection" content="address=no" />
 <meta name="format-detection" content="email=no" />
 <meta name="x-apple-disable-message-reformatting" />
 <link href="https://fonts.googleapis.com/css?family=Manrope:ital,wght@0,400;0,500" rel="stylesheet" />
 <title>Untitled</title>
 <!-- Made with Postcards Email Builder by Designmodo -->
 <style>
 html,
         body {
             margin: 0 !important;
             padding: 0 !important;
             min-height: 100% !important;
             width: 100% !important;
             -webkit-font-smoothing: antialiased;
         }
 
         * {
             -ms-text-size-adjust: 100%;
         }
 
         #outlook a {
             padding: 0;
         }
 
         .ReadMsgBody,
         .ExternalClass {
             width: 100%;
         }
 
         .ExternalClass,
         .ExternalClass p,
         .ExternalClass td,
         .ExternalClass div,
         .ExternalClass span,
         .ExternalClass font {
             line-height: 100%;
         }
 
         table,
         td,
         th {
             mso-table-lspace: 0 !important;
             mso-table-rspace: 0 !important;
             border-collapse: collapse;
         }
 
         u + .body table, u + .body td, u + .body th {
             will-change: transform;
         }
 
         body, td, th, p, div, li, a, span {
             -webkit-text-size-adjust: 100%;
             -ms-text-size-adjust: 100%;
             mso-line-height-rule: exactly;
         }
 
         img {
             border: 0;
             outline: 0;
             line-height: 100%;
             text-decoration: none;
             -ms-interpolation-mode: bicubic;
         }
 
         a[x-apple-data-detectors] {
             color: inherit !important;
             text-decoration: none !important;
         }
 
         .pc-gmail-fix {
             display: none;
             display: none !important;
         }
 
         .body .pc-project-body {
             background-color: transparent !important;
         }
 
         @media (min-width: 621px) {
             .pc-lg-hide {
                 display: none;
             } 
 
             .pc-lg-bg-img-hide {
                 background-image: none !important;
             }
         }
 </style>
 <style>
 @media (max-width: 620px) {
 .pc-project-body {min-width: 0px !important;}
 .pc-project-container {width: 100% !important;}
 .pc-sm-hide {display: none !important;}
 .pc-sm-bg-img-hide {background-image: none !important;}
 .pc-w620-padding-0-0-0-0 {padding: 0px 0px 0px 0px !important;}
 .pc-w620-fontSize-14px {font-size: 14px !important;}
 .pc-w620-lineHeight-163pc {line-height: 163% !important;}
 table.pc-w620-spacing-0-20-32-20 {margin: 0px 20px 32px 20px !important;}
 td.pc-w620-spacing-0-20-32-20,th.pc-w620-spacing-0-20-32-20{margin: 0 !important;padding: 0px 20px 32px 20px !important;}
 div.pc-w620-textAlign-left,th.pc-w620-textAlign-left,a.pc-w620-textAlign-left,td.pc-w620-textAlign-left {text-align: left !important;text-align-last: left !important;}
 table.pc-w620-textAlign-left{float: none !important;margin-right: auto !important;margin-left: 0 !important;}
 img.pc-w620-textAlign-left{margin-right: auto !important;margin-left: 0 !important;}
 .pc-w620-padding-32-0-0-0 {padding: 32px 0px 0px 0px !important;}
 table.pc-w620-spacing-0-0-0-0 {margin: 0px 0px 0px 0px !important;}
 td.pc-w620-spacing-0-0-0-0,th.pc-w620-spacing-0-0-0-0{margin: 0 !important;padding: 0px 0px 0px 0px !important;}
 .pc-w620-padding-10-30-10-30 {padding: 10px 30px 10px 30px !important;}
 div.pc-w620-textAlign-center,th.pc-w620-textAlign-center,a.pc-w620-textAlign-center,td.pc-w620-textAlign-center {text-align: center !important;text-align-last: center !important;}
 table.pc-w620-textAlign-center {float: none !important;margin-right: auto !important;margin-left: auto !important;}
 img.pc-w620-textAlign-center {margin-right: auto !important;margin-left: auto !important;}
 .pc-w620-fontSize-33px {font-size: 33px !important;}
 .pc-w620-padding-15-30-15-30 {padding: 15px 30px 15px 30px !important;}
 .pc-w620-itemsSpacings-0-20 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 10px !important;padding-bottom: 10px !important;}
 .pc-w620-valign-middle {vertical-align: middle !important;}
 td.pc-w620-halign-left,th.pc-w620-halign-left {text-align: left !important;}
 table.pc-w620-halign-left {float: none !important;margin-right: auto !important;margin-left: 0 !important;}
 img.pc-w620-halign-left {margin-right: auto !important;margin-left: 0 !important;}
 .pc-w620-width-fill {width: 100% !important;}
 .pc-w620-width-auto {width: auto !important;}
 .pc-w620-height-auto {height: auto !important;}
 .pc-w620-fontSize-12px {font-size: 12px !important;}
 .pc-w620-itemsSpacings-10-0 {padding-left: 5px !important;padding-right: 5px !important;padding-top: 0px !important;padding-bottom: 0px !important;}
 .pc-w620-padding-32-20-32-20 {padding: 32px 20px 32px 20px !important;}
 
 .pc-w620-gridCollapsed-1 > tbody,.pc-w620-gridCollapsed-1 > tbody > tr,.pc-w620-gridCollapsed-1 > tr {display: inline-block !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > tr > td,.pc-w620-gridCollapsed-1 > tr > td {display: block !important;width: auto !important;padding-left: 0 !important;padding-right: 0 !important;margin-left: 0 !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-first > .pc-grid-td-first,pc-w620-gridCollapsed-1 > .pc-grid-tr-first > .pc-grid-td-first {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-last > .pc-grid-td-last,pc-w620-gridCollapsed-1 > .pc-grid-tr-last > .pc-grid-td-last {padding-bottom: 0 !important;}
 
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-first > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-first > td {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-last > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-last > td {padding-bottom: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-first,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-first {padding-left: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-last,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-last {padding-right: 0 !important;}
 
 .pc-w620-tableCollapsed-1 > tbody,.pc-w620-tableCollapsed-1 > tbody > tr,.pc-w620-tableCollapsed-1 > tr {display: block !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1 > tbody > tr > td,.pc-w620-tableCollapsed-1 > tr > td {display: block !important;width: auto !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 }
 @media (max-width: 520px) {
 .pc-w520-padding-10-25-10-25 {padding: 10px 25px 10px 25px !important;}
 }
 </style>
 <!--[if !mso]><!-- -->
 <style>
 @font-face { font-family: 'Manrope'; font-style: normal; font-weight: 500; src: url('https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFN_M-b8.woff') format('woff'), url('https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFN_M-bk.woff2') format('woff2'); }
 </style>
 <!--<![endif]-->
 <!--[if mso]>
    <style type="text/css">
        .pc-font-alt {
            font-family: Arial, Helvetica, sans-serif !important;
        }
    </style>
    <![endif]-->
 <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
</head>

<body class="body pc-font-alt" style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; line-height: 1.5; color: #2D3A41; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #ff9b13;" bgcolor="#ff9b13">
 <table class="pc-project-body" style="table-layout: fixed; min-width: 600px; background-color: #ff9b13;" bgcolor="#ff9b13" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
  <tr>
   <td align="center" valign="top">
    <table class="pc-project-container" align="center" width="600" style="width: 600px; max-width: 600px;" border="0" cellpadding="0" cellspacing="0" role="presentation">
     <tr>
      <td class="pc-w620-padding-0-0-0-0" style="padding: 20px 0px 20px 0px;" align="left" valign="top">
       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width: 100%;">
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Header -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <!--[if !gte mso 9]><!-- -->
               <td valign="top" class="pc-w620-padding-32-0-0-0" style="background-image: url('https://cloudfilesdm.com/postcards/image-17241429995283.png'); background-size: cover; background-position: center; background-repeat: no-repeat; padding: 40px 110px 0px 110px; border-radius: 0px; background-color: #141414;" bgcolor="#141414" background="https://cloudfilesdm.com/postcards/image-17241429995283.png">
                <!--<![endif]-->
                <!--[if gte mso 9]>
                <td valign="top" align="center" style="background-image: url('https://cloudfilesdm.com/postcards/image-17241429995283.png'); background-size: cover; background-position: center; background-repeat: no-repeat; background-color: #141414; border-radius: 0px;" bgcolor="#141414" background="https://cloudfilesdm.com/postcards/image-17241429995283.png">
            <![endif]-->
                <!--[if gte mso 9]>
                <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px;">
                    <v:fill src="https://cloudfilesdm.com/postcards/image-17241429995283.png" color="#141414" type="frame" size="1,1" aspect="atleast" origin="0,0" position="0,0"/>
                    <v:textbox style="mso-fit-shape-to-text: true;" inset="0,0,0,0">
                        <div style="font-size: 0; line-height: 0;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                    <td style="font-size: 14px; line-height: 1.5;" valign="top">
                                        <p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                            <tr>
                                                <td colspan="3" height="40" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td width="110" valign="top" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                                <td valign="top" align="left">
                <![endif]-->
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td valign="top">
                   <img src="https://cloudfilesdm.com/postcards/image-1732142070572.png" width="380" height="auto" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 100%; height: auto; border: 0;" />
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-0-20-32-20 pc-w620-textAlign-left" align="center" valign="top" style="padding: 0px 0px 40px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-textAlign-left" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" class="pc-w620-textAlign-left" align="center">
                      <div class="pc-font-alt pc-w620-textAlign-left pc-w620-fontSize-14px pc-w620-lineHeight-163pc" style="line-height: 140%; letter-spacing: -0.2px; font-family: 'Manrope', Arial, Helvetica, sans-serif; font-size: 23px; font-weight: normal; font-variant-ligatures: normal; color: #ffffff; text-align: center; text-align-last: center;">
                       <div><span style="font-weight: 500;font-style: normal;color: rgb(208, 208, 208);letter-spacing: 0px;">FAALAAAAAA  ${Usuario}</span>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-0-20-32-20 pc-w620-textAlign-left" align="center" valign="top" style="padding: 0px 0px 40px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-textAlign-left" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" class="pc-w620-textAlign-left" align="center">
                      <div class="pc-font-alt pc-w620-textAlign-left pc-w620-fontSize-14px pc-w620-lineHeight-163pc" style="line-height: 140%; letter-spacing: -0.2px; font-family: 'Manrope', Arial, Helvetica, sans-serif; font-size: 20px; font-weight: normal; font-variant-ligatures: normal; color: #ffffff; text-align: center; text-align-last: center;">
                       <div><span style="font-weight: 500;font-style: normal;color: rgb(208, 208, 208);letter-spacing: 0px;">Um passarinho nós contou que você esqueceu sua senha! </span>
                       </div>
                       <div><span style="font-weight: 500;font-style: normal;color: rgb(208, 208, 208);letter-spacing: 0px;">Fica frio, </span><span style="font-weight: 500;font-style: normal;color: rgb(208, 208, 208);">so copiar esse código e voltar la pra mudar a senha!</span>
                       </div>
                       <div><span style="font-weight: 500;font-style: normal;color: rgb(208, 208, 208);">Trate de guardar essa bem, eihn</span><span style="font-weight: 500;font-style: normal;color: rgb(208, 208, 208);letter-spacing: 0px;">!</span>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td valign="top">
                   <img src="https://cloudfilesdm.com/postcards/image-17241429994852.png" width="380" height="auto" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 100%; height: auto; border: 0;" />
                  </td>
                 </tr>
                </table>
                <!--[if gte mso 9]>
                                                </td>
                                                <td width="110" style="line-height: 1px; font-size: 1px;" valign="top">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" height="0" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p>
                    </v:textbox>
                </v:rect>
                <![endif]-->
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Header -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Separator -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w520-padding-10-25-10-25 pc-w620-padding-10-30-10-30" style="padding: 10px 40px 10px 40px; border-radius: 0px; background-color: #141414;" bgcolor="#141414">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                 <tr>
                  <td valign="top">
                   <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                     <!--[if gte mso 9]>
                    <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 2px solid #D9D9D9;">&nbsp;</td>
                <![endif]-->
                     <!--[if !gte mso 9]><!-- -->
                     <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 2px solid #D9D9D9;">&nbsp;</td>
                     <!--<![endif]-->
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Separator -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Subtitle -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-padding-15-30-15-30" style="padding: 15px 40px 15px 40px; border-radius: 0px; background-color: #141414;" bgcolor="#141414">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-textAlign-center" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                 <tr>
                  <td valign="top" class="pc-w620-textAlign-center" align="center">
                   <div class="pc-font-alt pc-w620-textAlign-center pc-w620-fontSize-33px" style="line-height: 24px; letter-spacing: -0.2px; font-family: 'Manrope', Arial, Helvetica, sans-serif; font-size: 20px; font-weight: 500; font-variant-ligatures: normal; color: #ffffff; text-align: center; text-align-last: center;">
                    <div><span style="color: rgb(255, 255, 255);">${link}</span>
                    </div>
                   </div>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Subtitle -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Separator -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w520-padding-10-25-10-25 pc-w620-padding-10-30-10-30" style="padding: 10px 40px 10px 40px; border-radius: 0px; background-color: #141414;" bgcolor="#141414">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                 <tr>
                  <td valign="top">
                   <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                     <!--[if gte mso 9]>
                    <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 2px solid #D9D9D9;">&nbsp;</td>
                <![endif]-->
                     <!--[if !gte mso 9]><!-- -->
                     <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 2px solid #D9D9D9;">&nbsp;</td>
                     <!--<![endif]-->
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Separator -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Footer -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-padding-32-20-32-20" style="padding: 48px 56px 48px 56px; border-radius: 0px; background-color: #141414;" bgcolor="#141414">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td style="padding: 0px 0px 32px 0px;">
                   <table class="pc-width-fill pc-w620-gridCollapsed-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-grid-td-last pc-w620-itemsSpacings-0-20" align="left" valign="middle" style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                      <table class="pc-w620-width-fill" style="border-collapse: separate; border-spacing: 0; width: 100%;" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td class="pc-w620-halign-left pc-w620-valign-middle" align="center" valign="middle">
                         <table class="pc-w620-halign-left" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td class="pc-w620-halign-left" align="center" valign="top">
                            <table class="pc-w620-halign-left pc-w620-width-auto" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td class="pc-w620-spacing-0-0-0-0" valign="top" style="padding: 0px 0px 0px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" class="pc-w620-textAlign-center" align="center" style="padding: 0px 0px 0px 0px;">
                                  <div class="pc-font-alt pc-w620-textAlign-center pc-w620-fontSize-12px" style="line-height: 140%; letter-spacing: -0.2px; font-family: 'Manrope', Arial, Helvetica, sans-serif; font-size: 15px; font-weight: 500; font-variant-ligatures: normal; color: #ffffff; text-align: center; text-align-last: center;">
                                   <div><span style="font-weight: 500;font-style: normal;color: rgb(255, 255, 255);letter-spacing: 0px;">Não solicitou este código? Não se preocupe, pode ignorar, so você recebeu!</span>
                                   </div>
                                   <div><span>﻿</span>
                                   </div>
                                   <div><span style="font-weight: 500;font-style: normal;color: rgb(255, 255, 255);letter-spacing: 0px;">Se continua preocupado, mude sua senha!</span>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                 <tr>
                  <td valign="top" style="padding: 0px 0px 32px 0px;">
                   <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                     <!--[if gte mso 9]>
                    <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #6c6c6c33;">&nbsp;</td>
                <![endif]-->
                     <!--[if !gte mso 9]><!-- -->
                     <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #6c6c6c33;">&nbsp;</td>
                     <!--<![endif]-->
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="center" style="padding: 0px 0px 19px 0px;">
                   <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                     <td valign="top">
                      <table class="pc-width-hug pc-w620-gridCollapsed-0" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr class="pc-grid-tr-first pc-grid-tr-last">
                        <td class="pc-grid-td-first pc-grid-td-last pc-w620-itemsSpacings-10-0" valign="top" style="width: 33.333333333333%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                         <table style="border-collapse: separate; border-spacing: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td align="center" valign="top" style="padding: 8px 8px 8px 8px; border-radius: 100px 100px 100px 100px; border-top: 1px solid #ffffff33; border-right: 1px solid #ffffff33; border-bottom: 1px solid #ffffff33; border-left: 1px solid #ffffff33;">
                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                             <tr>
                              <td align="center" valign="top">
                               <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                 <td valign="top">
                                  <a class="pc-font-alt" href="https://www.instagram.com/atleticaceavi/" target="_blank" style="text-decoration: none;">
                                   <img src="https://cloudfilesdm.com/postcards/c7018a566a81caaffceb3e25da4a1ecd.png" class="" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 20px; height: 20px;" alt="" />
                                  </a>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Footer -->
         </td>
        </tr>
       </table>
      </td>
     </tr>
    </table>
   </td>
  </tr>
 </table>
 <!-- Fix for Gmail on iOS -->
 <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 </div>
</body>

</html>
`
}
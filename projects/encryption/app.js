let encryptText=document.getElementById("encryptText");
let encryptedResult=document.getElementById("EncryptedResult");
let decryptText=document.getElementById("decryptText");
let decryptedResult=document.getElementById("DecryptedResult");
let encryptBtn=document.getElementById("encryptBtn");
let decryptBtn=document.getElementById("decryptBtn");

encryptBtn.addEventListener("click",()=>{
            var encrypted = CryptoJS.AES.encrypt(encryptText.value,"shoaib");
            encryptedResult.value = encrypted;   
})

decryptBtn.addEventListener("click",()=>{
            var decrypted = CryptoJS.AES.decrypt(decryptText.value,"shoaib").toString(CryptoJS.enc.Utf8);
            decryptedResult.value = decrypted;
})
async function fileHash(file) {
      const arrayBuffer = await file.arrayBuffer();
      var encrypted = CryptoJS.AES.encrypt(arrayBuffer,"shoaib");
}














{/* <div class="w3-sidebar w3-collapse" id="sidenav" style="top: 44px; display: none;">
  <div id="leftmenuinner" style="padding-top: 44px;">
    <div id="leftmenuinnerinner">
<!--  <a href='javascript:void(0)' onclick='close_menu()' class='w3-button w3-hide-large w3-large w3-display-topright' style='right:16px;padding:3px 12px;font-weight:bold;'>&times;</a>-->
<h2 class="left"><span class="left_h2">HTML</span> Reference</h2>
<a target="_top" href="default.asp">HTML by Alphabet</a>
<a target="_top" href="ref_byfunc.asp">HTML by Category</a>
<a target="_top" href="ref_html_browsersupport.asp">HTML Browser Support</a>
<a target="_top" href="ref_attributes.asp">HTML Attributes</a>
<a target="_top" href="ref_standardattributes.asp">HTML Global Attributes</a>
<a target="_top" href="ref_eventattributes.asp">HTML Events</a>
<a target="_top" href="ref_colornames.asp">HTML Colors</a>
<a target="_top" href="ref_canvas.asp">HTML Canvas</a>
<a target="_top" href="ref_av_dom.asp">HTML Audio/Video</a>
<a target="_top" href="ref_charactersets.asp">HTML Character Sets</a>
<a target="_top" href="ref_html_dtd.asp">HTML Doctypes</a>
<a target="_top" href="ref_urlencode.asp">HTML URL Encode</a>
<a target="_top" href="ref_language_codes.asp">HTML Language Codes</a>
<a target="_top" href="ref_country_codes.asp">HTML Country Codes</a>
<a target="_top" href="ref_httpmessages.asp">HTTP Messages</a>
<a target="_top" href="ref_httpmethods.asp">HTTP Methods</a>
<a target="_top" href="ref_pxtoemconversion.asp">PX to EM Converter</a>
<a target="_top" href="ref_keyboardshortcuts.asp">Keyboard Shortcuts</a>
<br>
<div class="notranslate">
<h2 class="left"><span class="left_h2">HTML</span> Tags</h2>
<a target="_top" href="tag_comment.asp">&lt;!--&gt;</a>
<a target="_top" href="tag_doctype.asp">&lt;!DOCTYPE&gt;</a>
<a target="_top" href="tag_a.asp" class="active">&lt;a&gt;</a>
<a target="_top" href="tag_abbr.asp">&lt;abbr&gt;</a>
<a target="_top" href="tag_acronym.asp">&lt;acronym&gt;</a>
<a target="_top" href="tag_address.asp">&lt;address&gt;</a>
<a target="_top" href="tag_applet.asp">&lt;applet&gt;</a>
<a target="_top" href="tag_area.asp">&lt;area&gt;</a>
<a target="_top" href="tag_article.asp">&lt;article&gt;</a>
<a target="_top" href="tag_aside.asp">&lt;aside&gt;</a>
<a target="_top" href="tag_audio.asp">&lt;audio&gt;</a>
<a target="_top" href="tag_b.asp">&lt;b&gt;</a>
<a target="_top" href="tag_base.asp">&lt;base&gt;</a>
<a target="_top" href="tag_basefont.asp">&lt;basefont&gt;</a>
<a target="_top" href="tag_bdi.asp">&lt;bdi&gt;</a>
<a target="_top" href="tag_bdo.asp">&lt;bdo&gt;</a>
<a target="_top" href="tag_big.asp">&lt;big&gt;</a>
<a target="_top" href="tag_blockquote.asp">&lt;blockquote&gt;</a>
<a target="_top" href="tag_body.asp">&lt;body&gt;</a>
<a target="_top" href="tag_br.asp">&lt;br&gt;</a>
<a target="_top" href="tag_button.asp">&lt;button&gt;</a>
<a target="_top" href="tag_canvas.asp">&lt;canvas&gt;</a>
<a target="_top" href="tag_caption.asp">&lt;caption&gt;</a>
<a target="_top" href="tag_center.asp">&lt;center&gt;</a>
<a target="_top" href="tag_cite.asp">&lt;cite&gt;</a>
<a target="_top" href="tag_code.asp">&lt;code&gt;</a>
<a target="_top" href="tag_col.asp">&lt;col&gt;</a>
<a target="_top" href="tag_colgroup.asp">&lt;colgroup&gt;</a>
<a target="_top" href="tag_data.asp">&lt;data&gt;</a>
<a target="_top" href="tag_datalist.asp">&lt;datalist&gt;</a>
<a target="_top" href="tag_dd.asp">&lt;dd&gt;</a>
<a target="_top" href="tag_del.asp">&lt;del&gt;</a>
<a target="_top" href="tag_details.asp">&lt;details&gt;</a>
<a target="_top" href="tag_dfn.asp">&lt;dfn&gt;</a>
<a target="_top" href="tag_dialog.asp">&lt;dialog&gt;</a>
<a target="_top" href="tag_dir.asp">&lt;dir&gt;</a>
<a target="_top" href="tag_div.asp">&lt;div&gt;</a>
<a target="_top" href="tag_dl.asp">&lt;dl&gt;</a>
<a target="_top" href="tag_dt.asp">&lt;dt&gt;</a>
<a target="_top" href="tag_em.asp">&lt;em&gt;</a>
<a target="_top" href="tag_embed.asp">&lt;embed&gt;</a>
<a target="_top" href="tag_fieldset.asp">&lt;fieldset&gt;</a>
<a target="_top" href="tag_figcaption.asp">&lt;figcaption&gt;</a>
<a target="_top" href="tag_figure.asp">&lt;figure&gt;</a>
<a target="_top" href="tag_font.asp">&lt;font&gt;</a>
<a target="_top" href="tag_footer.asp">&lt;footer&gt;</a>
<a target="_top" href="tag_form.asp">&lt;form&gt;</a>
<a target="_top" href="tag_frame.asp">&lt;frame&gt;</a>
<a target="_top" href="tag_frameset.asp">&lt;frameset&gt;</a>
<a target="_top" href="tag_hn.asp">&lt;h1&gt; - &lt;h6&gt;</a>
<a target="_top" href="tag_head.asp">&lt;head&gt;</a>
<a target="_top" href="tag_header.asp">&lt;header&gt;</a>
<a target="_top" href="tag_hr.asp">&lt;hr&gt;</a>
<a target="_top" href="tag_html.asp">&lt;html&gt;</a>
<a target="_top" href="tag_i.asp">&lt;i&gt;</a>
<a target="_top" href="tag_iframe.asp">&lt;iframe&gt;</a>
<a target="_top" href="tag_img.asp">&lt;img&gt;</a>
<a target="_top" href="tag_input.asp">&lt;input&gt;</a>
<a target="_top" href="tag_ins.asp">&lt;ins&gt;</a>
<a target="_top" href="tag_kbd.asp">&lt;kbd&gt;</a>
<a target="_top" href="tag_label.asp">&lt;label&gt;</a>
<a target="_top" href="tag_legend.asp">&lt;legend&gt;</a>
<a target="_top" href="tag_li.asp">&lt;li&gt;</a>
<a target="_top" href="tag_link.asp">&lt;link&gt;</a>
<a target="_top" href="tag_main.asp">&lt;main&gt;</a>
<a target="_top" href="tag_map.asp">&lt;map&gt;</a>
<a target="_top" href="tag_mark.asp">&lt;mark&gt;</a>
<a target="_top" href="tag_meta.asp">&lt;meta&gt;</a>
<a target="_top" href="tag_meter.asp">&lt;meter&gt;</a>
<a target="_top" href="tag_nav.asp">&lt;nav&gt;</a>
<a target="_top" href="tag_noframes.asp">&lt;noframes&gt;</a>
<a target="_top" href="tag_noscript.asp">&lt;noscript&gt;</a>
<a target="_top" href="tag_object.asp">&lt;object&gt;</a>
<a target="_top" href="tag_ol.asp">&lt;ol&gt;</a>
<a target="_top" href="tag_optgroup.asp">&lt;optgroup&gt;</a>
<a target="_top" href="tag_option.asp">&lt;option&gt;</a>
<a target="_top" href="tag_output.asp">&lt;output&gt;</a>
<a target="_top" href="tag_p.asp">&lt;p&gt;</a>
<a target="_top" href="tag_param.asp">&lt;param&gt;</a>
<a target="_top" href="tag_picture.asp">&lt;picture&gt;</a>
<a target="_top" href="tag_pre.asp">&lt;pre&gt;</a>
<a target="_top" href="tag_progress.asp">&lt;progress&gt;</a>
<a target="_top" href="tag_q.asp">&lt;q&gt;</a>
<a target="_top" href="tag_rp.asp">&lt;rp&gt;</a>
<a target="_top" href="tag_rt.asp">&lt;rt&gt;</a>
<a target="_top" href="tag_ruby.asp">&lt;ruby&gt;</a>
<a target="_top" href="tag_s.asp">&lt;s&gt;</a>
<a target="_top" href="tag_samp.asp">&lt;samp&gt;</a>
<a target="_top" href="tag_script.asp">&lt;script&gt;</a>
<a target="_top" href="tag_section.asp">&lt;section&gt;</a>
<a target="_top" href="tag_select.asp">&lt;select&gt;</a>
<a target="_top" href="tag_small.asp">&lt;small&gt;</a>
<a target="_top" href="tag_source.asp">&lt;source&gt;</a>
<a target="_top" href="tag_span.asp">&lt;span&gt;</a>
<a target="_top" href="tag_strike.asp">&lt;strike&gt;</a>
<a target="_top" href="tag_strong.asp">&lt;strong&gt;</a>
<a target="_top" href="tag_style.asp">&lt;style&gt;</a>
<a target="_top" href="tag_sub.asp">&lt;sub&gt;</a>
<a target="_top" href="tag_summary.asp">&lt;summary&gt;</a>
<a target="_top" href="tag_sup.asp">&lt;sup&gt;</a>
<a target="_top" href="tag_svg.asp">&lt;svg&gt;</a>
<a target="_top" href="tag_table.asp">&lt;table&gt;</a>
<a target="_top" href="tag_tbody.asp">&lt;tbody&gt;</a>
<a target="_top" href="tag_td.asp">&lt;td&gt;</a>
<a target="_top" href="tag_template.asp">&lt;template&gt;</a>
<a target="_top" href="tag_textarea.asp">&lt;textarea&gt;</a>
<a target="_top" href="tag_tfoot.asp">&lt;tfoot&gt;</a>
<a target="_top" href="tag_th.asp">&lt;th&gt;</a>
<a target="_top" href="tag_thead.asp">&lt;thead&gt;</a>
<a target="_top" href="tag_time.asp">&lt;time&gt;</a>
<a target="_top" href="tag_title.asp">&lt;title&gt;</a>
<a target="_top" href="tag_tr.asp">&lt;tr&gt;</a>
<a target="_top" href="tag_track.asp">&lt;track&gt;</a>
<a target="_top" href="tag_tt.asp">&lt;tt&gt;</a>
<a target="_top" href="tag_u.asp">&lt;u&gt;</a>
<a target="_top" href="tag_ul.asp">&lt;ul&gt;</a>
<a target="_top" href="tag_var.asp">&lt;var&gt;</a>
<a target="_top" href="tag_video.asp">&lt;video&gt;</a>
<a target="_top" href="tag_wbr.asp">&lt;wbr&gt;</a>
</div>
      <br><br>
    </div>
  </div>
</div> */}


 
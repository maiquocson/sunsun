$((function(){var o=0;window.onpopstate=function(t){!1===t.state.confirm&&0!==o?$("#back_2_booking").submit():(o++,history.forward())},history.pushState({confirm:!1},"Not checked",""),history.pushState({confirm:!0},"Checked",""),history.back(),$("#btn-back").off("click"),$("#btn-back").on("click",(function(){history.back()}))}));
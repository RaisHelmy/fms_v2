function kPaneld() { 
  jsPanel.create({
    panelSize: '450 500',
    headerTitle: "IPD Information",
     content: '<p style="padding-left: 10px;">IPD Wangsa Maju</p><p style="padding-left: 12px;">IPD Another Information </p><iframe src="https://raishelmy.github.io/jadual_fms/" title="shield_map_3d_Map" width="100%" height="720px"></iframe>',
    position: {
      //my:      "left-top",
      //at:      "left-top",
      //offsetX: 150,
      //offsetY: 150,
      maxLeft: 10,
      maxTop: 120
    }
  });
}

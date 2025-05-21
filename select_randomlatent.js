// var currentSceneList = ["Lego", "Ficus", "Hotdog", "Armadillo"];
// var currentScene = "Lego";
// var currentSceneId = 0;
// var currentResultList = ["normal", "albedo", "rendering"];
// var currentResult = "normal";
// var currentResultId = 0;
// var currentMethodList = ["ours", "ours_multi_light", "nerfactor", "invRender", "GT"];
// var currentMethod = "ours";
var currentSceneList = ["Money", "Clock", "Golf", "Curry", "Baking", "Armatures", "Chair"];
var currentScene = "Money";
var currentSceneId = 0;
var currentResultList = ["albedo", "orm", "rendering"];
var currentResult = "albedo";
var currentResultId = 0;
var currentMethodList = ["ours", "ours_multi_light", "nerfactor", "invRender", "GT"];
var currentMethod = "ours";
var currentMaterialList = ["elastic", "newtonian", "plasticine", "sand", "non_newtonian"]


function ChangeMaterialLatent(idx) {

  var li_list = document.getElementById("materiallatent").children;

  console.log(idx);
  // console.log(li_list);
  for(i = 0; i < li_list.length; i++){
      li_list[i].className = "";
  }
  li_list[idx].className = "active";

  currentScene = currentMaterialList[idx];
  currentSceneId = idx;

  let video = document.getElementById("randomlatent")
  // console.log(video);
  old_src = video.src;
  // console.log(old_src);
  new_scr = old_src.split('/');
  new_scr[new_scr.length-1] = currentScene + "_randomlatent.mp4";
  new_video_dir = new_scr.join('/');
  // console.log(new_video_dir);
  video.src = new_video_dir;

  let video1 = document.getElementById("optimizedlatent")
  // console.log(video);
  old_src1 = video1.src;
  // console.log(old_src);
  new_scr1 = old_src1.split('/');
  new_scr1[new_scr1.length-1] = currentScene + "_optimizedlatent.mp4";
  new_video_dir1 = new_scr1.join('/');
  // console.log(new_video_dir);
  video1.src = new_video_dir1;

  let video2 = document.getElementById("groundtruthlatent")
  // console.log(video);
  old_src2 = video2.src;
  // console.log(old_src);
  new_scr2 = old_src2.split('/');
  new_scr2[new_scr2.length-1] = currentScene + "_gt.mp4";
  new_video_dir2 = new_scr2.join('/');
  // console.log(new_video_dir);
  video2.src = new_video_dir2;

}
///////////////////////////////////
var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}

///////////////////////////////////

function ChangeScene(idx){
  var li_list = document.getElementById("synthetic-view-ul").children;

  // console.log(idx);
  // console.log(li_list);
  for(i = 0; i < li_list.length; i++){
      li_list[i].className = "";
  }
  li_list[idx].className = "active";

  currentScene = currentSceneList[idx];
  currentSceneId = idx;
  let video = document.getElementById("TensoIR_Synthetic_Reconstruction")
  // console.log(video);
  old_src = video.src;
  // console.log(old_src);
  new_scr = old_src.split('/');
  new_scr[new_scr.length-2] = currentScene;
  new_video_dir = new_scr.join('/');
  // console.log(new_video_dir);
  video.src = new_video_dir;


    
}

function ChangeResult(idx){
  var li_list = document.getElementById("result-view-ul").children;

  // console.log(idx);
  // console.log(li_list);
  for(i = 0; i < li_list.length; i++){
      li_list[i].className = "";
  }
  li_list[idx].className = "active";

  currentResult= currentResultList[idx];
  currentResultId = idx;
  let video = document.getElementById("TensoIR_Synthetic_Reconstruction")
  // console.log(video);
  old_src = video.src;
  // console.log(old_src);
  new_scr = old_src.split('/');
  new_scr[new_scr.length-1] = currentResult + ".mp4";
  new_video_dir = new_scr.join('/');
  // console.log(new_video_dir);
  video.src = new_video_dir;
}



function ChangeVisibility(idx) {
  var li_list = document.getElementById("visibility").children;

  // console.log(idx);
  // console.log(li_list);
  for(i = 0; i < li_list.length; i++){
      li_list[i].className = "";
  }
  li_list[idx].className = "active";

  currentScene = currentSceneList[idx];
  currentSceneId = idx;
  let video = document.getElementById("TensoIR_Synthetic_Visibility")
  // console.log(video);
  old_src = video.src;
  // console.log(old_src);
  new_scr = old_src.split('/');
  new_scr[new_scr.length-2] = currentScene;
  new_video_dir = new_scr.join('/');
  // console.log(new_video_dir);
  video.src = new_video_dir;

}

function ChangeRelighting(idx) {

  var li_list = document.getElementById("relighting").children;

  // console.log(idx);
  // console.log(li_list);
  for(i = 0; i < li_list.length; i++){
      li_list[i].className = "";
  }
  li_list[idx].className = "active";

  currentScene = currentSceneList[idx];
  currentSceneId = idx;
  let video = document.getElementById("TensoIR_Synthetic_Relighting")
  // console.log(video);
  old_src = video.src;
  // console.log(old_src);
  new_scr = old_src.split('/');
  new_scr[new_scr.length-1] = currentScene + ".mp4";
  new_video_dir = new_scr.join('/');
  // console.log(new_video_dir);
  video.src = new_video_dir;


}

function ChangeMaterialsEditing(idx) {
    var li_list = document.getElementById("materials_editing").children;


    for(i = 0; i < li_list.length; i++){
        li_list[i].className = "";
    }
    li_list[idx].className = "active";
    
    new_sub_dir = currentSceneList[idx]

    origin_video_dir = document.getElementById("materials_editing_video1").src;
    console.log(origin_video_dir);
    new_video_dir = origin_video_dir.split('/');
    new_video_dir[new_video_dir.length-2] = new_sub_dir;
    new_video_dir = new_video_dir.join('/');
    document.getElementById("materials_editing_video1").src = new_video_dir;

}
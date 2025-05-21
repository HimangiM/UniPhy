var currentSceneId = 0;
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

  let video = document.getElementById("groundtruthlatent")
  // console.log(video);
  old_src2 = video.src;
  // console.log(old_src);
  new_scr2 = old_src2.split('/');
  new_scr2[new_scr2.length-1] = currentScene + "_gt.mp4";
  new_video_dir2 = new_scr2.join('/');
  // console.log(new_video_dir);
  video.src = new_video_dir2;

  let video1 = document.getElementById("optimizedlatent")
  // console.log(video);
  old_src1 = video1.src;
  // console.log(old_src);
  new_scr1 = old_src1.split('/');
  new_scr1[new_scr1.length-1] = currentScene + "_optimizedlatent.mp4";
  new_video_dir1 = new_scr1.join('/');
  // console.log(new_video_dir);
  video1.src = new_video_dir1;

  let video2 = document.getElementById("resimulation")
  // console.log(video);
  old_src = video2.src;
  // console.log(old_src);
  new_scr = old_src.split('/');
  new_scr[new_scr.length-1] = currentScene + "_resimulation.mp4";
  new_video_dir = new_scr.join('/');
  // console.log(new_video_dir);
  video2.src = new_video_dir;

  let video_2 = document.getElementById("groundtruthlatent2")
  // console.log(video);
  old_src2 = video_2.src;
  // console.log(old_src);
  new_scr2 = old_src2.split('/');
  new_scr2[new_scr2.length-1] = currentScene + "_gt2.mp4";
  new_video_dir2 = new_scr2.join('/');
  // console.log(new_video_dir);
  video_2.src = new_video_dir2;

  let video1_2 = document.getElementById("optimizedlatent2")
  // console.log(video);
  old_src1 = video1_2.src;
  // console.log(old_src);
  new_scr1 = old_src1.split('/');
  new_scr1[new_scr1.length-1] = currentScene + "_optimizedlatent2.mp4";
  new_video_dir1 = new_scr1.join('/');
  // console.log(new_video_dir);
  video1_2.src = new_video_dir1;

  let video2_2 = document.getElementById("resimulation2")
  // console.log(video);
  old_src = video2_2.src;
  // console.log(old_src);
  new_scr = old_src.split('/');
  new_scr[new_scr.length-1] = currentScene + "_resimulation2.mp4";
  new_video_dir = new_scr.join('/');
  // console.log(new_video_dir);
  video2_2.src = new_video_dir;

  let video_3 = document.getElementById("groundtruthlatent3")
  // console.log(video);
  old_src2 = video_3.src;
  // console.log(old_src);
  new_scr2 = old_src2.split('/');
  new_scr2[new_scr2.length-1] = currentScene + "_gt3.mp4";
  new_video_dir2 = new_scr2.join('/');
  // console.log(new_video_dir);
  video_3.src = new_video_dir2;

  let video1_3 = document.getElementById("optimizedlatent3")
  // console.log(video);
  old_src1 = video1_3.src;
  // console.log(old_src);
  new_scr1 = old_src1.split('/');
  new_scr1[new_scr1.length-1] = currentScene + "_optimizedlatent3.mp4";
  new_video_dir1 = new_scr1.join('/');
  // console.log(new_video_dir);
  video1_3.src = new_video_dir1;

  let video2_3 = document.getElementById("resimulation3")
  // console.log(video);
  old_src = video2_3.src;
  // console.log(old_src);
  new_scr = old_src.split('/');
  new_scr[new_scr.length-1] = currentScene + "_resimulation3.mp4";
  new_video_dir = new_scr.join('/');
  // console.log(new_video_dir);
  video2_3.src = new_video_dir;

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







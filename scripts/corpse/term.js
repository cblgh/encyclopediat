function Term(name)
{
  this.name = name;
  this.versions = [];

  this.push = function(version)
  {
    this.versions.push(version)
  }

  this.to_html = function()
  {
    var html = "";

    html += "<h2>"+this.name+"</h2>"
    
    for(v_id in this.versions){
      var v = this.versions[v_id];
      html += "<div class='term "+(v_id == 0 ? "latest" : "history")+"'>"+v.entry+"<note>Edited on <b>"+v.updated+"</b> by <a href=''>"+v.auth.substr(0,16)+"</a></note></div>";
    }
    
    return html;
  }
}

invoke.vessel.seal("corpse","term");
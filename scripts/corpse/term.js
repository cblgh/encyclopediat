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
    var v = this.find_active_version();
    html += "<div class='term active'>"+v.entry+"<note>Edited on <b>"+v.updated+"</b> by <a href='"+v.auth.substr(0,16)+"'>"+(v.auth == invoke.vessel.url ? "You" : v.auth.substr(0,16))+"</a></note></div>";

    return html;
  }

  this.find_active_version = function()
  {
    var version = null;
    for(v_id in this.versions){
      var v = this.versions[v_id];
      if(v.auth == invoke.vessel.url){
        return v;
      }
      version = v;
    }
    return version;
  }
}

invoke.vessel.seal("corpse","term");
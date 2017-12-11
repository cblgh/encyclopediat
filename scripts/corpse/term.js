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

    var v = this.find_active_version();
    html += "<h2 class='"+(v.auth == invoke.vessel.url ? "auth" : "aggr")+"'>"+this.name+"</h2>"
    html += "<div class='term active'>"+v.entry+"<note><action>"+(v.auth == invoke.vessel.url ? "Edit" : "Add")+"</action>Last change <b>"+v.updated+"</b> by <a href='"+v.auth+"'>"+(v.auth == invoke.vessel.url ? "You" : compress_dat_url(v.auth))+"</a>"+(this.versions.length > 1 ? ", against <a>"+this.versions.length+" versions</a>" : "")+".</note></div>";

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
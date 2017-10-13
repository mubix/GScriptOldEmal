function DeleteOldEmail () {
	var threads;
	var thread;

	threads = GmailApp.search("older_than:90d");
	for(var i = 0; i < threads.length; i++)
	{
      var thread = threads[i];
      
      var labels = thread.getLabels()
      var keepThread = false;
      // if(labels.length == 0) { continue; } // Option to skip over anything that doesn't have a label yet. Thx @jthoel
      for(var l = 0; l < labels.length; l++)
      {
        var label = labels[l].getName();
        if(label == "keep") { keepThread = true; }
      }

      if(keepThread == true) { continue; }
      Logger.log(thread.getFirstMessageSubject())
      //GmailApp.moveThreadToTrash(thread);
	}
}

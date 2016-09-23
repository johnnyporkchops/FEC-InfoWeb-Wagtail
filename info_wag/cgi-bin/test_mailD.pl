#!/usr/bin/perl -w

use strict;
use CGI;
use warnings;



my $query  = new CGI;

# it is important to check the validity of the email address
# supplied by the user both to catch genuine (mis-)typing errors
# but also to avoid exploitation by malicious users who could
# pass arbitrary strings to sendmail through the "send_to"
# CGI parameter - including whole email messages
# unless (Email::Valid->address($query->param('send_to'))) {
#   print $query->header;
#   print "You supplied an invalid email address.";
#   exit;
# }


# my $from = $query->param('from');

# unless ($from) {
    
#   print $query->header();
#   print "Please fill in your email and try again";
# }

#my $file     = "issues.txt";
# open (FILE, ">>$file") or die "Cannot open $file: $!";
# print $to,"\n";
# close(FILE); 


 my $issue= $query->param('issue');
 my $issue_desc  = $query->param('issue_desc');
 my $url=$query->param('url');
 my $sender  = $query->param('sender');
 my $to = "dyeager\@fec.gov";
# my $subject = $query->param('subject');
# my $url = $query->param('url');

open(MAIL, "|/usr/sbin/sendmail -t");
 
 # Email Header
print MAIL "To: $to\n";
print MAIL "To: $sender\n";
print MAIL "From: $sender\n";
#print MAIL "Cc: $sender_email\n";
print MAIL "Subject: $issue\n\n";

# # Email Body
print MAIL $issue_desc."\n".$url;

close(MAIL);

#print $query->redirect('http://infoweb_rep');

print "Content-type: text/html.\n\n";
# print $query->header();
# print "Just for testing-jcarroll:\n";
# print "From: ".$sender_email."\n";
# print "Issue: ".$issue."\n";
# print "Issue Description: ".$issue_desc."\n";

# print "Confirmation of your submission will be emailed to you.";
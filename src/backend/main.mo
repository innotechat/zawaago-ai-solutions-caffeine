import Map "mo:core/Map";
import Int "mo:core/Int";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Time "mo:core/Time";

actor {
  type ContactSubmission = {
    name : Text;
    company : Text;
    email : Text;
    phone : Text;
    projectDetails : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compareByTime(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Int.compare(b.timestamp, a.timestamp);
    };
  };

  let submissions = Map.empty<Time.Time, ContactSubmission>();

  public shared ({ caller }) func submitContactForm(name : Text, company : Text, email : Text, phone : Text, projectDetails : Text) : async () {
    let timestamp = Time.now();
    let submission : ContactSubmission = {
      name;
      company;
      email;
      phone;
      projectDetails;
      timestamp;
    };
    submissions.add(timestamp, submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    submissions.values().toArray().sort(ContactSubmission.compareByTime);
  };
};
